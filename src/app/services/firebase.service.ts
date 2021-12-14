import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  constructor(private firestore: AngularFirestore, public fAuth: AngularFireAuth) {}

  //Create CRUD service for Firebase data manipulation
  create_NewAccount(record) {
    return this.firestore.collection('Students').add(record);
  }

  create_NewAccountTeacher(record) {
    return this.firestore.collection('Teacher').add(record);
  }
 
  read_Account() {
    return this.firestore.collection('Students').snapshotChanges();
  }

  read_AccounTeachert() {
    return this.firestore.collection('Teacher').snapshotChanges();
  }
 
  update_Account(recordID,record){
    this.firestore.doc('Students/' + recordID).update(record);
  }
 
  update_AccountTeacher(recordID,record){
    this.firestore.doc('Teacher/' + recordID).update(record);
  }
 
  delete_Account (record_id) {
    this.firestore.doc('Students/' + record_id).delete();
  }
  delete_AccountTeacher (record_id) {
    this.firestore.doc('Teacher/' + record_id).delete();
  }

}
