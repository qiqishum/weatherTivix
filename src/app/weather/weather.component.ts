import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';
import {filter, map, pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {WeatherType} from './weatherType';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  forcastForm: FormGroup;
  forecast: WeatherType[] = [];
  selectedDate?: WeatherType;
  weatherFiveDays: any = [];
  public errorMsg;

  constructor(private service: WeatherService) {
  }

  ngOnInit(): void {
    this.forcastForm = new FormGroup({
      forecastCity: new FormControl('')
    });
  }

  onSubmit(): void {
    this.service.getWeather(this.forcastForm.value.forecastCity).subscribe(
      data => this.fiveDays(data),
      err => this.errorMsg = err.message);
    this.forcastForm.reset();
    this.weatherFiveDays = [];
  }


  fiveDays(data: any): void {
    for (let i = 0; i < data.length; i += 8) {
      this.weatherFiveDays.push(data[i]);
    }
  }

  onSelect(date: WeatherType): void {
    this.selectedDate = date;
  }
}
