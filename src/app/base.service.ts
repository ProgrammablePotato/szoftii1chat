import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  messageRef:AngularFireList<any>

  constructor(private db:AngularFireDatabase) { 
    this.messageRef = db.list("messages")
  }

  getMessages() {
    return this.messageRef
  }

  addMessage(uzi:any) {
    this.messageRef.push({username:"CouchPotato",message:uzi})
  }
}
