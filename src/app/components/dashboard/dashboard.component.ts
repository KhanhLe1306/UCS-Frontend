import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  onSubmit() {
    console.log("Onsubmit works!");
  };

  dashSearch() {
    console.log("Searching...");
  };

  ngOnInit(): void {
  }

}
