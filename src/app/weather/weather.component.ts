import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';
import {WeatherType} from './weatherType';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {setLoadingSpinner} from '../loading-spinner/shared/shared.actions';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  forcastForm: FormGroup;
  forecast: WeatherType[] = [];
  selectedDate?: string;
  weatherFiveDays: any = [];
  public errorMsg;
  myCity: string;

  constructor(private service: WeatherService,
              private store: Store,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {

    this.forcastForm = new FormGroup({
      forecastCity: new FormControl('')
    });
  }

  onSubmit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.myCity = this.forcastForm.value.forecastCity;
    this.clearField();
    this.service.getWeather(this.forcastForm.value.forecastCity).subscribe(
      data => this.fiveDays(data),
      err => this.errorMsg = err.message);
    this.clearWeather();
    this.store.dispatch(setLoadingSpinner({status: false}));
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
    this.forcastForm.reset();
    this.weatherFiveDays = [];
  }

  clearAll(): void {
    this.clearField();
    this.clearWeather();
    this.myCity = '';
  }
}
