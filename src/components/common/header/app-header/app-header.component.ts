import { Component, OnInit, Input } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Input() title: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onTabClick(event: MatTabChangeEvent) {
    console.log('event => ', event);
    console.log('index => ', event.index);
    console.log('tab => ', event.tab);
    if (event.tab.textLabel === 'Ritmos Latinos') {
      this.router.navigate(['home']);
    }
    if (event.tab.textLabel === 'Contacto') {
      this.router.navigate(['contact']);
    }
    if (event.tab.textLabel === 'Horario') {
      this.router.navigate(['schedule']);
    }
  }

}
