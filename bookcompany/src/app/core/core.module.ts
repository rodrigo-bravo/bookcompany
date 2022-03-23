import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { 
	IgxCarouselModule,
	IgxSliderModule
 } from "igniteui-angular";
import {AccordionModule} from 'primeng/accordion';
import {
  NavbarModule,
  DropdownModule,
  CardsModule,
  ButtonsModule,
  IconsModule
} from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'angular-bootstrap-md';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    IconsModule,
    FormsModule,
    RouterModule,
    DropdownModule.forRoot(),
    CardsModule,
    IgxCarouselModule,
	  IgxSliderModule,
    ButtonsModule,
    MatCardModule,
    AccordionModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    HomeComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    HomeComponent
  ],
  providers: [
    DataService
  ]
})
export class CoreModule {}
