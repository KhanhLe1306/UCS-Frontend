import { Component, OnInit } from '@angular/core';
import { Individual } from 'src/app/Models/Individual';
import { IndividualService } from 'src/app/services/individual.service';
import { IndividualListComponent } from '../individual-list/individual-list.component';
/**
 * @param  {'app-form'} {selector
 * @param  {'./form.component.html'} templateUrl
 * @param  {['./form.component.css']} styleUrls
 * @param  {} }
 */
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
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
