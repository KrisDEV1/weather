import {Component, OnInit, Input} from '@angular/core';
import {Weather} from '../../models/weather';

@Component({
    selector: 'p3-weather',
    templateUrl: './weather.component.html',
    styles: [`.city-cname, .city-ctemp, .city-ccond, .city-cicon {
    display: inline;
}`]
})
export class WeatherComponent implements OnInit {

    @Input() city: Weather;

    constructor() {
    }

    ngOnInit() {
    }

}
