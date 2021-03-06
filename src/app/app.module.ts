import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Components Module.
import { MyCustomMaterialModule } from './material.module';
// Route Module.
import { AppRoutingModule } from './app-routing.module';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppHeaderComponent } from '../components/common/header/app-header/app-header.component';
import { AppFooterComponent } from '../components/common//footer/app-footer/app-footer.component';
import { HomeComponent } from '../components/home/home.component';
import { VideosComponent } from '../components/videos/videos.component';
import { VideoCarouselComponent } from '../components/video-carousel/video-carousel.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ScheduleComponent } from '../components/schedule/schedule.component';
import { ShowErrorsComponent } from '../components/errors/show-errors.component';

// Angular Flex Layout.
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular PDF Viewer.
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { MailSenderService } from '../services/mail-sender.service';
import { MailProviderSendgridService } from '../services/mail-provider-sendgrid.service';
import { MailProviderMailgunService } from '../services/mail-provider-mailgun.service';
import { MailProviderFormspreeService } from '../services/mail-provider-formspree.service';

import { Ng2IziToastModule } from 'ng2-izitoast';

// Angular Google Maps.
import { AgmCoreModule } from '@agm/core';

// NGX Carousel.
import 'hammerjs';
import { NgxCarouselModule } from 'ngx-carousel';

// Validator.
import { TelephoneNumberFormatValidatorDirective } from '../directives/validators/telephone-number-format-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowErrorsComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ContactComponent,
    ScheduleComponent,
    HomeComponent,
    VideosComponent,
    TelephoneNumberFormatValidatorDirective,
    VideoCarouselComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FormsModule,
    MyCustomMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    PdfViewerModule,
    HttpClientModule,
    Ng2IziToastModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCA4Lqvi_IJLieTzYJjeBXUxuf9JBZQD68'
    }),
    NgxCarouselModule,
  ],
  providers: [
    MailSenderService,
    MailProviderSendgridService,
    MailProviderMailgunService,
    MailProviderFormspreeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
