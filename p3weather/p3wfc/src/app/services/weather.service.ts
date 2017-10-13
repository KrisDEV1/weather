import { Injectable } from '@angular/core';
import { Weather } from "../models/weather";

@Injectable()
export class WeatherService {
  city : Weather[] = [
    new Weather('Belgrade', '22', 'Clear Sky', 'http://openweathermap.org/img/w/01d.png'),
    new Weather('London', '9', 'Rain', 'http://openweathermap.org/img/w/10n.png'),
    new Weather('Berlin', '14', 'Cloudy', 'http://openweathermap.org/img/w/04d.png'),
    new Weather('New York', '20', 'Clear Sky', 'http://openweathermap.org/img/w/01d.png'),
    new Weather('Tokyo', '18', 'Haze', 'http://openweathermap.org/img/w/04d.png'),
  ];
  constructor() {  }

  getWeather() {
    return this.city;
  }

}
