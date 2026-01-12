import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.component.html',
  styleUrls: ['./ministries.component.scss'],
  standalone: false,
})
export class MinistriesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  ministries = [
    {
      name: 'Childrens Ministry',
      description: 'Teaching and nurturing children in the love of Christ.'
    },
    {
      name: 'Childrens Ministry',
      description: 'Teaching and nurturing children in the love of Christ.'
    },
  ]

}
