import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@NgModule({
  declarations: [
    AppComponent,
],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy,
  },
  Geolocation],
  bootstrap: [AppComponent],
})
export class AppModule { }
