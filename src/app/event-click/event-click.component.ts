import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-click',
  templateUrl: './event-click.component.html',
  styleUrls: ['./event-click.component.css']
})
export class EventClickComponent implements OnInit {

  str : string = "Marvellous Infosystems";

  public fun() : string
  {
    return this.str = "Educating For Better Tomorrow";
  }
  constructor() { }

  ngOnInit(): void { }

}
