import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { TeacherLoginDialogComponent } from '../teacher-login-dialog/teacher-login-dialog.component';

export class Teacher {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.scss'],
})
export class LoginTeacherComponent implements OnInit {

  dummy = [];

  public teacher: Teacher = new Teacher();
  

  constructor(
    private route: Router,
    public fAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(TeacherLoginDialogComponent);
  }

  async login() {
    try {
      //Firebase authenticates the users email and password
      let r = await this.fAuth.signInWithEmailAndPassword(
        this.teacher.email,
        this.teacher.password
      );
      if (r) {
        console.log(firebase.default.auth().currentUser.uid);

        console.log('Logado com sucesso!');
        //If student route to Student Portal
        this.route.navigate(['teacher']);

        //Show success prompt
        this.snackBar.open('Sucesso ao logar!', '', {
          duration: 4000,
        });
      }
    } catch (err) {
      console.error(err);
      // Prompt any error messages
      this.snackBar.open('Error ao logar!', 'Login ou senha incorretos.', {
        duration: 4000,
      });
    }
  }

}
