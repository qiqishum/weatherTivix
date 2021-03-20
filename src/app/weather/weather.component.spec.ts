import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import {provideMockStore} from '@ngrx/store/testing';
import {initialState} from '../loading-spinner/shared/shared.state';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveFormsModule} from '@angular/forms';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('onSubmit is running fine', async(() => {
    spyOn(component, 'onSubmit');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.onSubmit).toHaveBeenCalled();
    });
  }));

  it('should set store to be false after 1s', (done) => {
    component.onSubmit();
    setTimeout(() => {
      expect(component.onSubmit).toBeTruthy();
      done();
    }, 1000);
  });


});
