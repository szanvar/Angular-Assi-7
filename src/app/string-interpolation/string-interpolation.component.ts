import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  str : string = "";

  public fun()
  {
    return this.str = "Marvellous Infosystems";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
