import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss']
})
export class ListPeopleComponent implements OnInit {
  people: any;
  peopleService: any;

  constructor() {}

  ngOnInit(): void {
    this.people = this.peopleService.fetch()
  }

  ngFor

}
