import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-times',
  templateUrl: './service-times.component.html',
  styleUrls: ['./service-times.component.scss'],
  standalone: false,
})
export class ServiceTimesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  serviceTimes = [
    { title: 'Sunday Worship', time: '10:00 AM' },
    { title: 'Midweek Felllowship', time: 'Wenesday 6:30 PM' },
    { title: 'Youth and Teens', time: ' Friday 5:00 PM' }
  ]

}
