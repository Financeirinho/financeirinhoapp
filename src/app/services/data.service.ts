import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public quizOptions = 
  [
    'Iniciante-A',
    'Iniciante-B',
    'Iniciante-C',
    'Intermediario-A',
    'Intermediario-B',
    'Intermediario-C',
    'Moderado-A',
    'Moderado-B',
    'Moderado-C',
    'Avancado-A',
    'Avancado-B',
    'Avancado-C',
  ];

 message: string;
 showStudent: string;

  constructor() { }

  //Set the variable selectedQuiz with users selection
  setSelectedQuiz(data){
    this.message = data
  }
  //Get the value of the selectedQuiz
  getSelectedQuiz(){
    return this.message
  }


  // Set the variable selectedStudent with student name selected
  setSelectedStudent(studentname){
      this.showStudent = studentname
  }

  getSelectedStudent(){
    return this.showStudent
  }


}
