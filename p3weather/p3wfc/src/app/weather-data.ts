import { Component } from "@angular/core";
import {Http, Response} from "@angular/http";

export class WeatherData{
    constructor (public http: Http) {

    }

    apiLink = 'http://api.openweathermap.org/data/2.5/weather?q=';
    apiId = '4357b74140ca798a83baae946347165e';
    apiDefaultCity = 'Belgrade&APPID='
    cityTemperature = '';

    /*ngOnInit(){
        this.http.get(this.apiLink + this.apiDefaultCity + this.apiId )
            .subscribe(
                (res: Response) => {
                  const weatherCity = res.json();

                  this.cityTemperature = weatherCity.main.temp;
                })
    }*/

}