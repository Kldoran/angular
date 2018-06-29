import { Component, OnInit } from '@angular/core';

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
