import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Angular Material Components
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Firebase Imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentQuizComponent } from './student-quiz/student-quiz.component';
import { StudentPerformanceComponent } from './student-performance/student-performance.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { ResultComponent } from './result/result.component';
import { TeacherLoginDialogComponent } from './teacher-login-dialog/teacher-login-dialog.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentMentoringComponent } from './student-mentoring/student-mentoring.component';
import { LoginTeacherComponent } from './login-teacher/login-teacher.component';


const config = {
  apiKey: "AIzaSyByqJtApj64ONUu2RFr0PG2nsvtQXE9hZ8",
  authDomain: "mvdash.firebaseapp.com",
  databaseURL: "https://mvdash.firebaseio.com",
  projectId: "mvdash",
  storageBucket: "mvdash.appspot.com",
  messagingSenderId: "626608105136",
  appId: "1:626608105136:web:27aef7dc2c0e4d33387d75"
  };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginTeacherComponent,
    RegisterComponent,
    RegisterTeacherComponent,
    StudentPortalComponent,
    StudentDashboardComponent,
    StudentQuizComponent,
    StudentPerformanceComponent,
    StudentMentoringComponent,
    TakeQuizComponent,
    ResultComponent,
    TeacherLoginDialogComponent,
    TeacherDashboardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    MatFormFieldModule,
    MatInputModule,   
    MatIconModule,
    MatSnackBarModule,
    MatSidenavModule,
    FormsModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatTabsModule,
    MatTableModule,
    MatStepperModule,
    MatDialogModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
