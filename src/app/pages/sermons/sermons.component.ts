import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss'],
  standalone: false
})
export class SermonsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  sermons = [
    {
      title: 'Walking in Faith',
      preacher: 'Rev. John Kiptoo',
      date: 'January 5, 2025',
      description: 'A powerful message on trusting God even when the path is unclear.'
    },
    {
      title: 'The Power of Prayer',
      preacher: 'Pastor Mary Chebet',
      date: 'December 29, 2024',
      description: 'Exploring how prayer transforms our lives and strengthens our walk with Christ.'
    },
    {
      title: 'Hope in Difficult Times',
      preacher: 'Rev. Samuel Rotich',
      date: 'December 22, 2024',
      description: 'Encouragement for believers facing trials and uncertainty.'
    }
  ];

}
