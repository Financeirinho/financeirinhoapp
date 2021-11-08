import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-student-performance',
  templateUrl: './student-performance.component.html',
  styleUrls: ['./student-performance.component.scss']
})
export class StudentPerformanceComponent implements OnInit {

  db = firebase.default.firestore();
  searchByStudent = firebase.default.auth().currentUser.uid;
  readResults = [];
  results = [];

  algebra= [];
  geometry = [];
  number = [];
  stats = [];


  //quizName: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

    //Search for the results of the student
    this.db.collection('Students').where('StudentID', '==', this.searchByStudent).onSnapshot(snapshot => {
      snapshot.docs.forEach (doc => {
        this.db.collection('Students').doc(doc.id).collection('Results').get().then(snap => {
          snap.docs.forEach (x => {

            // Sort the arrays based upon the quiz name in Firebase

            if(x.id.includes('Iniciante')){
              this.algebra.push(
                {
                  QuizID: x.id
                }
              )
            } 
            if (x.id.includes('Intermediario')) {
              this.geometry.push(
                {
                  QuizID: x.id
                }
              )
            }
            if (x.id.includes('Moderado')) {
              this.number.push(
                {
                  QuizID: x.id
                }
              )
            }
            if (x.id.includes('Avancado')) {
              this.stats.push(
                {
                  QuizID: x.id
                }
              )
            }
          })
        })
      })
    })
  }
}
