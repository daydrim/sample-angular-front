import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})

export class WeatherforecastService {

  weatherUrl = '/api/weatherforecast';
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.weatherUrl);
  }
}
