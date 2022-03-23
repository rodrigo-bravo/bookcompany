import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { ButtonsModule, InputsModule, CardsModule, InputUtilitiesModule, IconsModule } from 'angular-bootstrap-md';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
    declarations: [
        ConfirmModalComponent,
        ProjectModalComponent,
        ProjectsListComponent,
        ProjectComponent,
    ],
    imports: [
        CommonModule,
        InputsModule,
        NgxStarRatingModule,
        ReactiveFormsModule,
        InputUtilitiesModule,
        IconsModule,
        FormsModule,
        ShareButtonsModule,
        ShareIconsModule,
        ButtonsModule,
        CardsModule,
        FlexLayoutModule
    ],
    exports: [ProjectsListComponent, ProjectComponent],
    providers: []
})
export class SharedModule {}
