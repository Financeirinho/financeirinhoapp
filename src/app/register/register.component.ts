import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';

export class Student {
  fullName: string;
  teacher: string;
  class: string;
  school: string;
  primaryKey: string;
  email: string;
  password: string;
  studentID: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public student: Student = new Student();
  
  contactForm: FormGroup;
  db = firebase.default.firestore();
  teacherList = [];
  constructor(   
    private crudService: FirebaseService,
    private route: Router,
    public fAuth: AngularFireAuth,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.db
    .collection('Teacher')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((docs) => {
        console.log('5estetetttt    ======================   ', docs.data().FullName);
        this.teacherList.push(
          
            docs.data().FullName
          )
          console.log('lista ==========', this.teacherList);
      });
    });

  }
  async createAccount() {
    try {
      let r = await this.fAuth.createUserWithEmailAndPassword(
        this.student.email,
        this.student.password
      );
      if (r) {
        // Create a record with the users details to store in the database
        let record = {};
        record['FullName'] = this.student.fullName;
        record['Teacher'] = this.student.teacher;
        record['Class'] = this.student.class;
        record['School'] = this.student.school;
        //record['PrimaryKey'] = this.student.primaryKey;
        record['Email'] = this.student.email;
        record['Password'] = this.student.password;
        record['StudentID'] = firebase.default.auth().currentUser.uid;
        console.log(record);

        this.crudService.create_NewAccount(record).then(resp => {
          this.student.fullName = "";
          this.student.teacher = "";
          this.student.class = "";
          this.student.school = "";
          //this.student.primaryKey = "";
          this.student.email = "";
          this.student.password = "";
          this.student.studentID = "";
          console.log(resp);
        })
        console.log('Successfully registered!');
        this.snackBar.open('Account Created', '', {
          duration: 4000
        });
        this.route.navigate(['']);
      }

    } catch (err) {
        // Error message shows when registration is unsuccessful
        this.snackBar.open('Account Created', '', {
          duration: 4000
        });

      console.error(err);
      this.snackBar.open(err.message, '', {
        duration: 4000
      });
    }
  }

  
}
