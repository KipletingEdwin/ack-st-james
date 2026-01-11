import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ministries-grid',
  templateUrl: './ministries-grid.component.html',
  styleUrls: ['./ministries-grid.component.scss'],
  standalone: false,
})
export class MinistriesGridComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  ministries = [
    {
      name: 'Children’s Ministry',
      description: 'Nurturing young hearts with biblical truth.'
    },
    {
      name: 'Youth & Teens',
      description: 'Empowering the next generation.'
    },
    {
      name: 'Worship Team',
      description: 'Leading the church in praise and worship.'
    },
    {
      name: 'Community Outreach',
      description: 'Serving our neighbors with compassion and love.'
    }
  ];

}
