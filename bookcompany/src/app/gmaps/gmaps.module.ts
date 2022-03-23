import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmapsRoutingModule } from './gmaps-routing.module';
import { GmapsComponent } from './containers/gmaps.component';
import { GmapsMainComponent } from './components/gmapsMain/gmapsMain.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { MatCardModule } from "@angular/material/card";

@NgModule({
  imports: [
    CommonModule,
    GmapsRoutingModule,
    AgmCoreModule,
    MatCardModule,
    GooglePlaceModule
  ],
  declarations: [GmapsComponent, GmapsMainComponent],
  exports: [GmapsComponent]
})
export class GmapsModule { }
