import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_newComment(record) {
    return this.firestore.collection('comments').add(record);
  }

  read_Comments() {
    return this.firestore.collection('comments').snapshotChanges();
  }

}