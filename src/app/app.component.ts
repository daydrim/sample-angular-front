import { Component, OnInit } from '@angular/core';
import {WeatherforecastService} from './services/weatherforecast.service';
import {Weatherforecastmodel} from './model/weatherforecastmodel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherforecastService]
})
export class AppComponent {
  title = 'front';
  weathers: any = [];
  constructor(private weatherserv: WeatherforecastService) {
  }
  ngOnInit() {
    this.showWeather();
  }
  showWeather() {
    this.weatherserv.getData()
      .subscribe((data: Weatherforecastmodel) => this.weathers =data);
  }
}
