import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { DataService } from '../services/data.service';


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
  score: any;
  algebra= [];
  geometry = [];
  number = [];
  stats = [];


  //quizName: string;

  constructor(private shareData: DataService, private router: Router) { }

  ngOnInit(): void {
    this.db.collection('Students').where('StudentID', '==', this.searchByStudent).onSnapshot(snapshot => {
      snapshot.docs.forEach (doc => {
        this.db.collection('Students').doc(doc.id).collection('Results').doc(this.shareData.quizOptions[1]).get().then(snap => {

          this.score = snap.data()[5].Score
          console.log(this.score)
        })
      })
    })
    //Search for the results of the student
    this.db.collection('Students').where('StudentID', '==', this.searchByStudent).onSnapshot(snapshot => {
      snapshot.docs.forEach (doc => {
        this.db.collection('Students').doc(doc.id).collection('Results').get().then(snap => {
          snap.docs.forEach (x => {

            // Sort the arrays based upon the quiz name in Firebase

            if(x.id.includes('Iniciante')){
              this.algebra.push(
                {
                  QuizID: x.id,
                  Score: this.score
                }
              )
            } 
            if (x.id.includes('Intermediario')) {
              this.geometry.push(
                {
                  QuizID: x.id,
                  score: this.score
                }
              )
            }
            if (x.id.includes('Moderado')) {
              this.number.push(
                {
                  QuizID: x.id,
                  score: this.score
                }
              )
            }
            if (x.id.includes('Avancado')) {
              this.stats.push(
                {
                  QuizID: x.id,
                  score: this.score
                }
              )
            }
          })
        })
      })
    })
  }
}
