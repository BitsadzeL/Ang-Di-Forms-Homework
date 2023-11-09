import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  users: User[] = []; 

  addUserToList(nam: string, surn: string, tel: string) {
    const newUser: User = {
      firstName: nam,
      lastName: surn,
      phoneNumber: tel,
    };

    this.users.push(newUser);
  }



  getInfo(object:any){
    this.users=object;
  }


  getUsers(){
    return this.users;
  }



  constructor() { }
}
