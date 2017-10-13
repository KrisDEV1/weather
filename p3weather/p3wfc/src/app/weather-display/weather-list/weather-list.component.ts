import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/weather';
import {WeatherService} from "../../services/weather.service";


@Component({
  selector: 'p3-weather-list',
  templateUrl: './weather-list.component.html',
  styles: []

})
export class WeatherListComponent implements OnInit {

  city : Weather[] = [];

  constructor( private weatherService: WeatherService) { }

  ngOnInit() {
    this.city = this.weatherService.getWeather();
  }

}
