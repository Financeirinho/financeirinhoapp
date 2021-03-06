import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import firebase from "firebase/app";


@Component({
  selector: 'app-student-quiz',
  templateUrl: './student-quiz.component.html',
  styleUrls: ['./student-quiz.component.scss']
})
export class StudentQuizComponent implements OnInit {

  db = firebase.firestore();
  algebraQuizzes = [];
  geometryQuizzes = [];
  numberQuizzes = [];
  statsQuizzes = [];
  message: string;

  constructor
  (
    private router: Router,
    private shareData: DataService
  ) { }

  ngOnInit() {

    this.db.collection("Year 8 Quizzes").get().then((snapshot => {
      snapshot.forEach((quizOption => {
        console.log(quizOption.id)

        if (quizOption.id.includes('Iniciante')){
          // Add the quizzes for Algebra in array to iterate through in the front-end
          this.algebraQuizzes.push(
            {
              ID: quizOption.id
            }
          );

          console.log('Student Algebra Quizes: ' + ' ' + this.algebraQuizzes)
      }
      if (quizOption.id.includes('Intermediario')){
          // Add the quizzes for Algebra in array to iterate through in the front-end
          this.geometryQuizzes.push(
            {
              ID: quizOption.id
            }
          );

          console.log('Student Geometry Quizes: ' + ' ' + this.geometryQuizzes)
      }
      if (quizOption.id.includes('Moderado')){
          // Add the quizzes for Algebra in array to iterate through in the front-end
          this.numberQuizzes.push(
            {
              ID: quizOption.id
            }
          );
          console.log('Student Number Quizes: ' + ' ' + this.numberQuizzes)
      }
      if (quizOption.id.includes('Avancado')){
          // Add the quizzes for Algebra in array to iterate through in the front-end
          this.statsQuizzes.push(
            {
              ID: quizOption.id
            }
          );

          console.log('Student Stats Quizes: ' + ' ' + this.statsQuizzes)
      }
        

      }))
    }))

    
    
    }
  }

