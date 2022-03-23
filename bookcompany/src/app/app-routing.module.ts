import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AdminComponent } from './admin/containers/admin/admin.component';
import { AdminGuard } from './admin/guard/admin.guard';
import { ContactComponent } from './core/contact/contact.component';
import { FeaturesComponent } from './core/features/features.component';
import { AboutComponent } from './core/about/about.component';
import { ProjectsComponent } from './projects/containers/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent, 
    children: [
      { path: '', component: ProjectsComponent},
      { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule), canActivate: [AuthGuard]},
      { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
      { path: 'book-search', loadChildren: () => import('./book-search/book-search.module').then(m => m.BookSearchModule), canActivate: [AuthGuard] },
      { path: 'nytimes', loadChildren: () => import('./nytimes/nytimes.module').then(m => m.NytimesModule), canActivate: [AuthGuard] },
      { path: 'gmaps', loadChildren: () => import('./gmaps/gmaps.module').then(m => m.GmapsModule), canActivate: [AuthGuard] },
      { path: 'heremap', loadChildren: () => import('./here-map/here-map.module').then(m => m.HereMapModule), canActivate: [AuthGuard] },
      { path: 'admin-panel', component: AdminComponent, canActivate: [AdminGuard]}
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
