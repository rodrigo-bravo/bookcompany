import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileComponent } from './containers/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  declarations: [ProfileComponent,  ProfileUserComponent],
  exports: [ProfileComponent]
})
export class ProfileModule { }
