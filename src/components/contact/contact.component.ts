import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: any;

  constructor() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
  }

  ngOnInit() {
  }

  sendQuery(myForm: NgForm) {
    console.log('Send query');
    console.log(myForm);
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Campo obligatorio' :
        this.email.hasError('email') ? 'Formato de email no válido' :
            '';
  }

}
