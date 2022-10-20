import { Component, OnInit } from '@angular/core';
import { Individual } from 'src/app/Models/Individual';
import { IndividualService } from 'src/app/services/individual.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  userName: string = '';
  password: string = '';

  constructor(private individualService: IndividualService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Onsubmit works!');
    let individual: Individual = {
      firstName: this.firstName,
      lastname: this.lastName,
      userName: this.userName,
      password: this.password
    };
    console.log(individual);

    this.individualService
      .addIndividual(individual)
      .subscribe((res) => console.log(res));
  }
}
