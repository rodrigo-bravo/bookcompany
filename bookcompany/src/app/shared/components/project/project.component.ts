import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '../../../projects/models/project.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Input() editable = true;
  @Output() deleted = new EventEmitter<Project>();
  @Output() edited = new EventEmitter<Project>();
  @Input() rating: number;

  public form: FormGroup;
  rating3: number;
  constructor(private fb: FormBuilder) { 
    this.rating3 = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }

  iconClass = {
    0: 'far fa-star',
    0.5: 'fas fa-star-half-alt',
    1: 'fas fa-star'
  }

  stars: number[] = [0, 0, 0, 0, 0]; //five empty stars
  ngOnChanges(){
    this.fillStars();
  }
  fillStars(){
    var starsToFill = Math.round(this.rating * 2)/2; //round to nearest 0.5
    var i = 0;
    while(starsToFill > 0.5){
      this.stars[i] = 1;
      i++;
      starsToFill--;
    }
    if(starsToFill === 0.5){
      this.stars[i] = 0.5;
    }
  }

  ngOnInit() {
  }

  onDelete() {
    this.deleted.emit(this.project);
  }

  onEdit() {
    this.edited.emit(this.project);
  }

}
