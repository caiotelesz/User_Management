import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private dataBaseStore: AngularFirestore) { }

  // Get all users
  getAllUsers() {
    return this.dataBaseStore.collection('users', user => user.orderBy('name')).valueChanges({idField: 'firebaseId'}) as Observable<any[]>;
  }

  // Add user
  addUser(user: any) {
    return this.dataBaseStore.collection('users').add(user);
  }

  // Update user
  updateUser(userId: string, user: any) {
    return this.dataBaseStore.collection('users').doc(userId).update(user);
  }

  // Delete user
  deleteUser(userId: string) {
    return this.dataBaseStore.collection('users').doc(userId).delete();
  }
}
