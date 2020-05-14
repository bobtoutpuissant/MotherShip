import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // clickOnMap(id){
  //   $("input[name='search']").val(id);
  //   $("input[name='room']").click();
  //   console.log('que ça marche!')
  // };
}