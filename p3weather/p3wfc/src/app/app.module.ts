import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { HttpModule } from "@angular/http";
import { WeatherListComponent } from './weather-display/weather-list/weather-list.component';
import { WeatherComponent } from './weather-display/weather-list/weather.component';
import { WeatherService } from "./services/weather.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherDisplayComponent,
    WeatherListComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
