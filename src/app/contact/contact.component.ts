import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {createInvalidDomainValidator} from './invalidEmailDomain';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';


const invalidEmailDomain = createInvalidDomainValidator(['gmail.com', 'yahoo.com', 'hotmail.com']);


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule, ReactiveFormsModule ],
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
  });



  submitForm() {

    console.log(this.contactForm.valid);
    // if (this.senderNameControl.dirty) {
    //   alert('you changed the name field');
    // }
  }


}
