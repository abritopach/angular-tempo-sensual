import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Angular Material Components Module.
import { MyCustomMaterialModule } from './material.module';
// Route Module.
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from '../common/components/header/app-header/app-header.component';
import { AppFooterComponent } from '../common/components/footer/app-footer/app-footer.component';
import { ContactComponent } from '../components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyCustomMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
