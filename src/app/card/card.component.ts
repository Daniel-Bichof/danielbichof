import { Component, OnInit } from '@angular/core';

// https://andyraskin.com/#intro


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],

})
export class CardComponent implements OnInit {

  constructor() { }
  itens=[
    {name: 'Github', img: "../assets/github.svg",},
    {name: 'JS', img: "../assets/square-js.svg"},
    {name: 'Python', img: "../assets/python.svg"},
    {name: 'Angular', img: "../assets/angular.svg"},
    {name: 'C', img: "../assets/c-programming.png"},
  ];
  images=[];
  ngOnInit(): void {
  }

}
