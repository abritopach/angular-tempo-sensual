import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/startWith';

import { MailSenderService } from '../../services/mail-sender.service';

import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // The number of colums in the md-grid-list directive.
  public cols: number;

  // http://brianflove.com/2017/05/03/responsive-angular/
  constructor(private observableMedia: ObservableMedia, private mailSenderService: MailSenderService,
    private iziToast: Ng2IzitoastService) {
  }

  ngOnInit() {
    const breakpoints: {[size: string]: number} = {
      ['xs'] : 1,
      ['sm'] : 2,
      ['md'] : 2,
      ['lg'] : 2,
      ['xl'] : 2
    };

    this.observableMedia.subscribe(x => this.cols = breakpoints[x.mqAlias]);
  }

  sendQuery(myForm: NgForm) {
    console.log('Send query');
    console.log(myForm);
    this.showMessage();

    /*
    this.mailSenderService.sendMail(myForm.controls['email'].value, '', 'Consulta ' + myForm.controls['name'].value
    + ' ' + myForm.controls['phoneNumber'].value, myForm.controls['query'].value).subscribe(
      data => {
        console.log(data);
      },
      error => {
          console.log(<any>error);
      }
    );
    */
  }

  showMessage() {
    this.iziToast.show({
      id: 'user-messagge',
      theme: 'dark',
      icon: 'fa fa-address-card',
      title: 'Duda enviada',
      message: 'Gracias por enviar tus dudas. Nos pondremos en contacto lo antes posible.',
      position: 'topCenter',
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      progressBarColor: 'rgb(0, 255, 184)',
      image: 'https://ui-avatars.com/api/?name=Tempo+Sensual&background=E91E63&color=fff',
      imageWidth: 70,
      layout: 2,
      iconColor: 'rgb(0, 255, 184)'
    });
  }

}
