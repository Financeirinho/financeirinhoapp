import { Component, OnInit } from '@angular/core';
import { TeacherLoginDialogComponent } from '../teacher-login-dialog/teacher-login-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import {MatDividerModule} from '@angular/material/divider';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {

  db = firebase.default.firestore()
  quizNames =   [
    'Iniciante-A',
    'Iniciante-B',
    'Iniciante-C',
    'Intermediario-A',
    'Intermediario-B',
    'Intermediario-C',
    'Moderado-A',
    'Moderado-B',
    'Moderado-C',
    'Avancado-A',
    'Avancado-B',
    'Avancado-C',
  ];

  //Create variables to bind the values

  quizType: any;
  quizQuestion: any;
  quizAnswer: any;
  quizOption1: any;
  quizOption2: any;
  quizOption3: any;
  quizOption4: any;
  imageQuiz: any;
  quizQuestions = [];

  getQuizName: any;
  
  constructor(private shareData: DataService, public dialog: MatDialog, public fAuth: AngularFireAuth,
    private route: Router,) { }


  ngOnInit(): void {
    console.log(this.quizNames)

  }

  addQuestion(quizType) {

    const newQuestion = {
      question: this.quizQuestion,
      answer: this.quizAnswer,
      option1: this.quizOption1,
      option2: this.quizOption2,
      imageQuiz: this.imageQuiz,
    }

    console.log(newQuestion)

    try {
      this.db.collection("Year 8 Quizzes").doc(this.quizType).collection("questions").add(newQuestion).then(() => {

        this.getQuestions(quizType)

      }).then(() => {
        this.quizQuestion = "";
        this.quizAnswer = "";
        this.quizOption1 = "";
        this.quizOption2 = "";

        this.imageQuiz = "";
      })
      
    } catch (error) {
      console.log(error.message)
    }
  }


  //Get Question Function
  getQuestions(quiz){

    this.quizQuestions =[];

    this.getQuizName = quiz;

    this.db.collection('Year 8 Quizzes').doc(quiz).collection('questions').onSnapshot((snapshot) => {
      snapshot.docs.forEach((x) => {
        //Extract the data needed for the quiz and push into the quizQuestions array
       this.quizQuestions.push({
          ID: x.id,
          Question: x.data().question,
          Answer: x.data().answer,
          Option1: x.data().option1,
          Option2: x.data().option2
        });
       // console.log(this.quizQuestions);
      });
    });
    console.log(this.quizQuestions)

    this.deleteQuestion(this.quizQuestions, this.getQuizName)
  }

  deleteQuestion(questions, quiz){

    console.log(questions.ID)


    try {
      this.db.collection('Year 8 Quizzes').doc(this.getQuizName).collection('questions').doc(questions.ID).delete().then(() => {

        for (let i=0; i<this.quizQuestions.length; i++){

          if (this.quizQuestions[i].ID == questions.ID){

            this.quizQuestions.splice(i,1)
         }
        }
      })
      
    } catch (error) {

      console.log(error.message)
      
    }

  }

  logout() {
    this.fAuth.signOut();
     this.route.navigate(['']);
 }

}
