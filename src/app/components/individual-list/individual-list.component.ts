import { Component, OnInit } from '@angular/core';
import { IndividualService } from 'src/app/services/individual.service';
import { Individual } from 'src/app/Models/Individual';

@Component({
  selector: 'app-individual-list',
  templateUrl: './individual-list.component.html',
  styleUrls: ['./individual-list.component.css'],
})
export class IndividualListComponent implements OnInit {
  individuals: Individual[] = [];

  constructor(private individualService: IndividualService) {}

  ngOnInit(): void {
    this.individualService.getAllIndividuals().subscribe((res) => {
      this.individuals = res;
    });
  }
}
