import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';
import {WeatherType} from './weatherType';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {setLoadingSpinner} from '../loading-spinner/shared/shared.actions';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  forecastForm: FormGroup;
  forecast: WeatherType[] = [];
  selectedDate?: string;
  weatherFiveDays: any = [];
  public errorMsg;
  myCity: string;

  constructor(private service: WeatherService,
              private store: Store,
             ) {
  }

  ngOnInit(): void {

    this.forecastForm = new FormGroup({
      forecastCity: new FormControl('')
    });
  }

  onSubmit(): void {
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.myCity = this.forecastForm.value.forecastCity;
    this.clearField();
    this.service.getWeather(this.forecastForm.value.forecastCity).subscribe(
      data => this.fiveDays(data),
      err => this.errorMsg = err.message);
    this.clearWeather();
    setTimeout(() => {
      this.store.dispatch(setLoadingSpinner({status: false}));
    }, 1000);
  }


  fiveDays(data: any): void {
    for (let i = 0; i < data.length; i += 8) {
      this.weatherFiveDays.push(data[i]);
    }
  }

  onSelect(date: string): void {
    this.selectedDate = date;
  }

  private clearField(): void {
    this.errorMsg = '';
    this.selectedDate = '';
  }

  private clearWeather(): void {
    this.forecastForm.reset();
    this.weatherFiveDays = [];
  }

  clearAll(): void {
    this.clearField();
    this.clearWeather();
    this.myCity = '';
  }
}
