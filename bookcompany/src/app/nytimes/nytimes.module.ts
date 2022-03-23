import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NytimesRoutingModule } from './nytimes-routing.module';
import { NytimesComponent } from './containers/nytimes.component';
import { NytimesUserComponent } from './components/mainList/mainList.component';
import { AgmCoreModule } from '@agm/core';
import { MatCardModule } from "@angular/material/card";
import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [
    CommonModule,
    NytimesRoutingModule,
    MatTableModule,
    AgmCoreModule,
    MatCardModule,
  ],
  declarations: [NytimesComponent, NytimesUserComponent],
  exports: [NytimesComponent]
})
export class NytimesModule { }
