import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentQuizComponent } from './student-quiz/student-quiz.component';
import { StudentPerformanceComponent } from './student-performance/student-performance.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { ResultComponent } from './result/result.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { StudentMentoringComponent } from './student-mentoring/student-mentoring.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { LoginTeacherComponent } from './login-teacher/login-teacher.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-teacher', component: RegisterTeacherComponent },
  { path: 'login-teacher', component: LoginTeacherComponent },

  {
    path: 'student',
    component: StudentPortalComponent,
    children: [
      { path: 'dashboard', component: StudentDashboardComponent },
      { path: 'quiz', component: StudentQuizComponent },
      { path: 'performance', component: StudentPerformanceComponent },
      { path: 'mentoring', component: StudentMentoringComponent },      	
      { path: ':ID', component: TakeQuizComponent },
      { path: 'performance/results/:QuizID', component: ResultComponent },
    ],
  },
  {
    path: 'teacher',
    component: TeacherDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
