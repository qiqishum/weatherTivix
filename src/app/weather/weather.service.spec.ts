import {inject, TestBed} from '@angular/core/testing';

import {WeatherService} from './weather.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';



describe('Weather Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });
  });

  it('Weather service is Running Fine', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});

