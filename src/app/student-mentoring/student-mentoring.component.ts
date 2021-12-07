import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-student-mentoring',
  templateUrl: './student-mentoring.component.html',
  styleUrls: ['./student-mentoring.component.scss']
})
export class StudentMentoringComponent implements OnInit {

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


  }
}
