import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { RegistrationService } from '../services/registration.service';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  constructor(private fb: FormBuilder, public reg:RegistrationService, public info:InfoService) { }


  applicantForm = this.fb.group({
    firstName: ["",Validators.required],
    lastName: [""],
    phoneNumber: [""],
  });

  people: User[] = [];



  addUser() {
    const name = this.applicantForm.get('firstName')?.value as string;
    const surname = this.applicantForm.get('lastName')?.value as string;
    const phone = this.applicantForm.get('phoneNumber')?.value as string;
    this.reg.addUserToList(name,surname,phone);
    this.reg.getInfo(this.people);
    this.info.printAllUsers();
    this.applicantForm.reset();
  }


  
  
  
  
  
}
