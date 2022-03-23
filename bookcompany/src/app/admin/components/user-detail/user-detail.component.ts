import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../../auth/models/user.model';
import { Project } from '../../../projects/models/project.model';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  @Input() projects: Project[];
  @Input() userProjectsLoading: boolean;
  @Output() detailsClosed = new EventEmitter<any>();
  @Output() projectsLoad = new EventEmitter<any>();
  @Output() projectDeleted = new EventEmitter<Project>();
  @Output() addAdmin = new EventEmitter<any>();
  @Output() removeAdmin = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  closeDetails() {
    this.detailsClosed.emit();
  }

  loadProjects() {
    this.projectsLoad.emit();
  }

  onProjectDelete(project: Project) {
    this.projectDeleted.emit(project);
  }

  onAddAdmin() {
    this.addAdmin.emit(this.user);
  }

  onRemoveAdmin() {
    this.removeAdmin.emit(this.user);
  }
}
