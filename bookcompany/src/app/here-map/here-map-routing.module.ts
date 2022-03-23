import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HereMapComponent } from './containers/here-map-parent.component';

const routes: Routes = [
  { path: '', component: HereMapComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HereMapRoutingModule {}
