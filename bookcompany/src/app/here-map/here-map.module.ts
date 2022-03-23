import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HereMapRoutingModule } from './here-map-routing.module';
import { HereMapComponent } from './containers/here-map-parent.component';
import { HereMapMainComponent } from './components/components/here-map.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { MatCardModule } from "@angular/material/card";
import { AgmDirectionModule } from 'agm-direction';
import {MatExpansionModule} from '@angular/material/expansion'; 

@NgModule({
  imports: [
    CommonModule,
    HereMapRoutingModule,
    AgmCoreModule,
    AgmDirectionModule,
    MatCardModule,
    MatExpansionModule,
    GooglePlaceModule
  ],
  declarations: [HereMapComponent, HereMapMainComponent],
  exports: [HereMapComponent]
})
export class HereMapModule { }
