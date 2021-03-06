import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, _closeDialogVia} from '@angular/material/dialog';

@Component({
  selector: 'app-teacher-login-dialog',
  templateUrl: './teacher-login-dialog.component.html',
  styleUrls: ['./teacher-login-dialog.component.scss']
})
export class TeacherLoginDialogComponent implements OnInit {

  teacherPassKey: any;
  passKey = "9874";

  constructor(private router: Router, private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  teacherAccess() { 
    console.log(this.teacherPassKey)

   // this.router.navigate(['teacher-dashboard'])

    if (this.teacherPassKey == this.passKey){
      this.router.navigate(['login-teacher'])


    } else {
      this.snackBar.open('Codigo errado', '', {
        duration: 4000
      });
    }
    
    this.closeDialog()
  }



  closeDialog(){
    this.dialog.closeAll()
  }
}

