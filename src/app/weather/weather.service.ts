import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import { pluck} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient,
              ) {
  }


  getWeather(city: string = ''): Observable<any> {
    return this.http.get(`${environment.apiUrl}/forecast?q=${city}&units=metric&appid=${environment.apiKey}`)
      .pipe(
        pluck('list')
      );
  }
}
