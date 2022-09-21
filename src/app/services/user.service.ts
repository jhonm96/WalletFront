import { Injectable } from '@angular/core';
import { Auth, getAuth } from '@angular/fire/auth';
import { collection, collectionData, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:Auth,private firestore:Firestore) { }

  newUser(){
    const databaseref=collection(this.firestore,"users")
    const user = getAuth().currentUser
    const userref=doc(databaseref,user?.uid)
    return setDoc(userref,{id:user?.uid,nombre:user?.displayName,email:user?.email,telefono:user?.phoneNumber})
  }


  listar():Observable<Usuario[]> {
    const databaseref=collection(this.firestore,"users")
    return collectionData(databaseref,{idField:"id"})as Observable<Usuario[]>
  }


}
