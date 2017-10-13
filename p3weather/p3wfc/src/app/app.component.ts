import {Component} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {WeatherData} from "./weather-data";


@Component({
    selector: 'p3-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'p3 weather app';

    /*constructor(private http: Http) {

    }

    apiLink = 'http://api.openweathermap.org/data/2.5/weather?q=';
    apiId = '4357b74140ca798a83baae946347165e';
    apiDefaultCity = 'Belgrade&APPID='
    cityTemperature = '';
    cityName = '';


    ngOnInit() {
        this.http.get(this.apiLink + this.apiDefaultCity + this.apiId)
            .subscribe(
                (res: Response) => {
                    const weatherCity = res.json();
                    console.log(weatherCity);
                    this.cityTemperature = weatherCity.main.temp;
                    this.cityName = weatherCity.name;
                })
    }*/

}
