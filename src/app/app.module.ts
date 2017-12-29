import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Components Module.
import { MyCustomMaterialModule } from './material.module';
// Route Module.
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from '../common/components/header/app-header/app-header.component';
import { AppFooterComponent } from '../common/components/footer/app-footer/app-footer.component';
import { HomeComponent } from '../components/home/home.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ScheduleComponent } from '../components/schedule/schedule.component';
import { ShowErrorsComponent } from '../components/errors/show-errors.component';

// Angular Flex Layout.
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular PDF Viewer.
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { MailSenderService } from '../services/mail-sender.service';
import { MailProviderSendgridService } from '../services/mail-provider-sendgrid.service';


@NgModule({
  declarations: [
    AppComponent,
    ShowErrorsComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ContactComponent,
    ScheduleComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MyCustomMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    PdfViewerModule,
    HttpClientModule
  ],
  providers: [
    MailSenderService,
    MailProviderSendgridService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
