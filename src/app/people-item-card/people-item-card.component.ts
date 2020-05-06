import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-item-card',
  templateUrl: './people-item-card.component.html',
  styleUrls: ['./people-item-card.component.scss']
})
export class PeopleItemCardComponent implements OnInit {

  peopleName = 'Olivier'
  peopleSurname = 'DELALANDE'
  peopleRoom = 'W214'
  peopleMail = 'olivier.delalande@telespazio.com'

  constructor() { }

  ngOnInit(): void {
  }

}
