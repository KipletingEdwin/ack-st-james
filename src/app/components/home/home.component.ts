import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  serviceTimes = [
    { title: 'Sunday Worhip', time: '10:00AM'},
    { title: 'Midweek Fellowship', time: 'Wenesday 6:30 PM'},
    { title: 'Youth & Teens', time: 'Friday 5:00PM'},
  ];

  ministries = [
    {
      name: 'Children’s Ministry',
      description: 'Nurturing young hearts with biblical truth.',
    },
    {
      name: 'Youth & Teens',
      description: 'Empowering the next generation.',
    },
    {
      name: 'Worship Team',
      description: 'Leading the church in praise.',
    },
    {
      name: 'Community Outreach',
      description: 'Serving our neighbors with compassion.',
    },
  ];

}
