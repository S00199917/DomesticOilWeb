import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  UploadData(collection:string, data:any):Promise<any>{
    return this.firestore.collection(collection).add(data);
  }

  
}
