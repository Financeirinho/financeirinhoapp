import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';

export class Teacher {
  fullName: string;
  email: string;
  password: string;
  teacherID: string;
}


@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.scss']
})
export class RegisterTeacherComponent implements OnInit {

  public teacher: Teacher = new Teacher();
  
  contactForm: FormGroup;

  db = firebase.default.firestore();

  constructor(   
    private crudService: FirebaseService,
    private route: Router,
    public fAuth: AngularFireAuth,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }
  async createAccount() {
    try {
      let r = await this.fAuth.createUserWithEmailAndPassword(
        this.teacher.email,
        this.teacher.password
      );
      if (r) {
        // Create a record with the users details to store in the database
        let record = {};
        record['FullName'] = this.teacher.fullName;
        record['Email'] = this.teacher.email;
        record['Password'] = this.teacher.password;
        record['TeacherID'] = firebase.default.auth().currentUser.uid;
        console.log(record);

        this.crudService.create_NewAccountTeacher(record).then(resp => {
          this.teacher.fullName = "";
          this.teacher.email = "";
          this.teacher.password = "";
          this.teacher.teacherID = "";
          console.log(resp);
        })
        console.log('Successfully registered!');
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
