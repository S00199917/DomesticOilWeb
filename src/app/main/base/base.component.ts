import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  testDevices = [
    {name: 'Midfield', battery : 59, level: 49},
    {name: 'Meelick', battery : 100, level: 78},
    {name: 'Clooninsin', battery : 22, level: 33}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
