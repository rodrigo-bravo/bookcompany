import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../auth/models/user.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() user: User;
  @Input() isLoggedIn: boolean;
  @Input() isLoading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
