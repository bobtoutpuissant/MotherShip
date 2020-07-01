import { Component, OnInit, Input } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-people-item-card',
  templateUrl: './people-item-card.component.html',
  styleUrls: ['./people-item-card.component.scss']
})
export class PeopleItemCardComponent implements OnInit {

  @Input() person: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
