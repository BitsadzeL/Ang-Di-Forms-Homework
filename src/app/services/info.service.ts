import { Injectable } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private registrationService: RegistrationService) { }

  printAllUsers() {
    const users: User[] = this.registrationService.getUsers();
      console.log('List of Users:');
      users.forEach(user => {
        console.log(`Name: ${user.firstName} ${user.lastName}, Phone: ${user.phoneNumber}`);
      });
    
  }
}
