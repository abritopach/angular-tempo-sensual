import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // The number of colums in the md-grid-list directive.
  public cols: number;

  // http://brianflove.com/2017/05/03/responsive-angular/
  constructor(private observableMedia: ObservableMedia) {
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
  }

}
