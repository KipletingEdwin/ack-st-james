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
    {
      name: 'Men’s Fellowship',
      description: 'Building strong, Christ-centered men for family and community.',
    },
    {
      name: 'Worship Team',
      description: 'Leading the congregation in praise and worship.',
    },
    {
      name: 'Community Outreach',
      description: 'Serving the community through acts of love and compassion.',
    }
  ];

}
