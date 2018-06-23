import { Component, OnInit } from '@angular/core';
import { routeChange } from './common/animations';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [routeChange()],
  host: { '[@routeChange]': ''}
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
