import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false,
})
export class ContactComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  form = {
    name: '',
    email: '',
    message: ''
  };

  submitForm(){
    console.log('Form submitted:', this.form);
    alert('Thank you for reaching out! We will get back to you soon.')
  }


}
