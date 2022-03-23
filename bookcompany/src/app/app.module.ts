import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { ModalModule } from 'angular-bootstrap-md';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { IgxCarouselModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AuthModule,
        SharedModule,
        ModalModule.forRoot(),
        AdminModule,
        AppRoutingModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireDatabaseModule,
        IgxCarouselModule,
        GooglePlaceModule,
        CoreModule,
        AgmCoreModule.forRoot({
            apiKey: '{GOOGLE_API_KEY_HERE}',
            libraries: ['places']
          }),
        AgmDirectionModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        StoreModule.forRoot(reducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            },
            metaReducers
        }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([]),
        BrowserAnimationsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
