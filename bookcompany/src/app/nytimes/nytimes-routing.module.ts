import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NytimesComponent } from './containers/nytimes.component';

const routes: Routes = [
  { path: '', component: NytimesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NytimesRoutingModule {}
