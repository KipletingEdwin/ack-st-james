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
      name: 'Children’s Ministry',
      description: 'Teaching and nurturing children in the love of Christ.',
    },
    {
      name: 'Youth & Teens',
      description: 'Empowering young people to grow in faith and leadership.',
    },
    {
      name: 'Women’s Fellowship',
      description: 'Encouraging spiritual growth and unity among women.',
    },
  ]

}
