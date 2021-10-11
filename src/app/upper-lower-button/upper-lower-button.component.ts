import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-lower-button',
  templateUrl: './upper-lower-button.component.html',
  styleUrls: ['./upper-lower-button.component.css']
})
export class UpperLowerButtonComponent implements OnInit {

  str : string = "";
  str1 : string = "";

  upperCase() : string
  {
    this.str ="Marvellous Infosystems";
    this.str1 = this.str.toUpperCase();
    return this.str1;
  }

  lowerCase()
  {
    this.str ="Marvellous Infosystems";
    this.str1 = this.str.toLowerCase();
    return this.str1; 
  }
  constructor() { }

  ngOnInit(): void { }

}
