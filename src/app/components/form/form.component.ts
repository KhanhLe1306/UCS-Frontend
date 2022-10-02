import { Component, OnInit } from '@angular/core';
import { Individual } from 'src/app/Models/Individual';
import { IndividualService } from 'src/app/services/individual.service';
import { IndividualListComponent } from '../individual-list/individual-list.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';

  constructor(private individualService: IndividualService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Onsubmit works!');
    let individual: Individual = {
      firstName: this.firstName,
      lastname: this.lastName,
    };
    console.log(individual);

    this.individualService
      .addIndividual(individual)
      .subscribe((res) => console.log(res));
  }
}
