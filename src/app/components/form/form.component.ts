import { Component, OnInit } from '@angular/core';
import { Individual } from 'src/app/Models/Individual';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log('Onsubmit works!');
    let individual: Individual = {
      firstName: this.firstName,
      lastname:  this.lastName
    }
    console.log(individual);
  }
}
