import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
    selector: 'p3-weather-display',
    templateUrl: './weather-display.component.html',
    styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {

    constructor(public http: Http) {

    }

    apiLink = 'http://api.openweathermap.org/data/2.5/weather?q=';
    apiForecastLink = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    apiId = '4357b74140ca798a83baae946347165e';
    apiDefaultCity = 'Belgrade&APPID=';
    apiDefaultUnit = '&units=Metric';
    cityIconLink = 'http://openweathermap.org/img/w/';
    cityTemperature = '';
    cityName = '';
    citySkyCondition = '';
    cityMinTemp = '';
    cityMaxTemp = '';
    cityHumidity = '';
    cityWindSpeed = '';
    cityWindDir = '';
    cityIcon = '';
    cityWeatherMain = '';
    cityForecastTemp1 = '';
    cityForecastDT1 = '';
    cityForecastIcon1 = '';
    cityForecastTemp2 = '';
    cityForecastDT2 = '';
    cityForecastIcon2 = '';
    cityForecastTemp3 = '';
    cityForecastDT3 = '';
    cityForecastIcon3 = '';
    cityForecastTemp4 = '';
    cityForecastDT4 = '';
    cityForecastIcon4 = '';
    cityForecastTemp5 = '';
    cityForecastDT5 = '';
    cityForecastIcon5 = '';


    ngOnInit() {
        this.http.get(this.apiLink + this.apiDefaultCity + this.apiId + this.apiDefaultUnit)
            .subscribe(
                (res: Response) => {
                    const weatherCity = res.json();

                    this.cityTemperature = weatherCity.main.temp.toFixed(0);
                    this.cityName = weatherCity.name;
                    this.citySkyCondition = weatherCity.weather[0].description;
                    this.cityHumidity = weatherCity.main.humidity;
                    this.cityMinTemp = weatherCity.main.temp_min;
                    this.cityMaxTemp = weatherCity.main.temp_max;
                    this.cityWindSpeed = weatherCity.wind.speed;
                    this.cityWindDir = weatherCity.wind.deg;
                })

        this.http.get(this.apiForecastLink + this.apiDefaultCity + this.apiId + this.apiDefaultUnit)
            .subscribe(
                (res: Response) => {
                    const weatherFCity = res.json();

                    this.cityForecastTemp1 = weatherFCity.list[7].main.temp.toFixed(0);
                    this.cityForecastDT1 = weatherFCity.list[7].dt;
                    this.cityForecastIcon1 = weatherFCity.list[7].weather[0].icon;

                    this.cityForecastTemp2 = weatherFCity.list[14].main.temp.toFixed(0);
                    this.cityForecastDT2 = weatherFCity.list[14].dt;
                    this.cityForecastIcon2 = weatherFCity.list[14].weather[0].icon;

                    this.cityForecastTemp3 = weatherFCity.list[19].main.temp.toFixed(0);
                    this.cityForecastDT3 = weatherFCity.list[19].dt;
                    this.cityForecastIcon3 = weatherFCity.list[19].weather[0].icon;

                    this.cityForecastTemp4 = weatherFCity.list[26].main.temp.toFixed(0);
                    this.cityForecastDT4 = weatherFCity.list[26].dt;
                    this.cityForecastIcon4 = weatherFCity.list[26].weather[0].icon;

                    this.cityForecastTemp5 = weatherFCity.list[34].main.temp.toFixed(0);
                    this.cityForecastDT5 = weatherFCity.list[34].dt;
                    this.cityForecastIcon5 = weatherFCity.list[34].weather[0].icon;
                })

    }


    searchCity() {
        this.http.get(this.apiLink + this.cityName + '&APPID=' + this.apiId + this.apiDefaultUnit)
            .subscribe(
                (res: Response) => {
                    const weatherCity = res.json();

                    this.cityTemperature = weatherCity.main.temp.toFixed(0);
                    this.cityName = weatherCity.name;
                    this.cityHumidity = weatherCity.main.humidity;
                    this.cityWindSpeed = weatherCity.wind.speed;
                    this.cityWindDir = weatherCity.wind.deg;
                    this.cityMinTemp = weatherCity.main.temp_min;
                    this.cityMaxTemp = weatherCity.main.temp_max;
                    this.citySkyCondition = weatherCity.weather[0].description;
                    this.cityIcon = weatherCity.weather[0].icon;
                    this.cityWeatherMain = weatherCity.weather[0].main;
                })

        this.http.get(this.apiForecastLink + this.cityName + '&APPID=' + this.apiId + this.apiDefaultUnit)
            .subscribe(
                (res: Response) => {
                    const weatherFCity = res.json();

                    this.cityForecastTemp1 = weatherFCity.list[7].main.temp.toFixed(0);
                    this.cityForecastDT1 = weatherFCity.list[7].dt;
                    this.cityForecastIcon1 = weatherFCity.list[7].weather[0].icon;

                    this.cityForecastTemp2 = weatherFCity.list[14].main.temp.toFixed(0);
                    this.cityForecastDT2 = weatherFCity.list[14].dt;
                    this.cityForecastIcon2 = weatherFCity.list[14].weather[0].icon;

                    this.cityForecastTemp3 = weatherFCity.list[19].main.temp.toFixed(0);
                    this.cityForecastDT3 = weatherFCity.list[19].dt;
                    this.cityForecastIcon3 = weatherFCity.list[19].weather[0].icon;

                    this.cityForecastTemp4 = weatherFCity.list[26].main.temp.toFixed(0);
                    this.cityForecastDT4 = weatherFCity.list[26].dt;
                    this.cityForecastIcon4 = weatherFCity.list[26].weather[0].icon;

                    this.cityForecastTemp5 = weatherFCity.list[34].main.temp.toFixed(0);
                    this.cityForecastDT5 = weatherFCity.list[34].dt;
                    this.cityForecastIcon5 = weatherFCity.list[34].weather[0].icon;
                })
    }


}
