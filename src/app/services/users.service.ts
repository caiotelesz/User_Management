import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  nome: string = 'Caio Teles';

  user: User = {
    name: 'Caio Teles',
    email: 'caio.teles@gmail.com',
    sector: 'Tecnologia',
    role: 'Desenvolvedor Front End Angular'
  }


  constructor(private dataBaseStore: AngularFirestore) { }

  // Get all users
  getAllUsers() {
    return this.dataBaseStore.collection('users', user => user.orderBy('name')).valueChanges({idField: 'firebaseId'}) as Observable<any[]>;
  }

  // Add user
  addUser(user: User) {
    return this.dataBaseStore.collection('users').add(user);
  }

  // Update user
  updateUser(userId: string, user: User) {
    return this.dataBaseStore.collection('users').doc(userId).update(user);
  }

  // Delete user
  deleteUser(userId: string) {
    return this.dataBaseStore.collection('users').doc(userId).delete();
  }
}
