import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../../auth/models/user.model';
import { FormGroup, FormControl } from '@angular/forms';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileUserComponent implements OnInit {
  @Input() user: User;
  @Output() logout = new EventEmitter<any>();
  @Output() profileUpdate = new EventEmitter<any>();

  updateProfileForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private titleService: Title) { }
  
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  setView(view: CalendarView) {
    this.view = view;
  }

  addMessage(title:string) {
    if(title.length==0){
      window.confirm('\nDear ' + this.user.displayName + ',\n\nAre you sure you do not want to update your profile status? \nPress OK to confirm.\n')
    } else {
      window.confirm('\nDear ' + this.user.displayName + ',\n\nYour updated profile status now reads as: "'+ title + '" !\n')
    }
  }

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'First Event',
    },
    {
      start: startOfDay(new Date()),
      title: 'Second Event',
    },
  ]

  ngOnInit() {
    this.updateProfileForm = new FormGroup({
      displayName: new FormControl(this.user.displayName),    
      photoUrl: new FormControl(this.user.photoUrl)
    });
    this.titleService.setTitle("Your Profile");
  }
  
  onProfileUpdate() {
    this.profileUpdate.emit(this.updateProfileForm.value);
  }

  onLogout() {
    this.logout.emit(this.user);
  }
  

}


