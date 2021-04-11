import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {



  properties: Array<any> =
  [

    {
    "Id": 1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
    },
    {
      "Id": 2,
      "Name":"Tennessee House",
      "Type":"Apartment",
      "Price":12000
    },
    {
      "Id": 3,
      "Name":"Mississippi House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id": 4,
      "Name":"Brandon House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id": 5,
      "Name":"Chicago House",
      "Type":"Apartment",
      "Price":12000
    },
    {
      "Id": 6,
      "Name":"Texas House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id": 7,
      "Name":"Los Angeles House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id": 8,
      "Name":"Mexico House",
      "Type":"House",
      "Price":12000
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
