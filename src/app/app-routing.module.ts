import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from '../components/contact/contact.component';
import { ScheduleComponent } from '../components/schedule/schedule.component';

const routes: Routes = [
  /*{ path: '', redirectTo: '/contact', pathMatch: 'full' },*/
  { path: 'schedule', component: ScheduleComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
