import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from './loading-spinner/shared/app.state';
import {getLoading} from './loading-spinner/shared/shared.selector';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weatherTivix';
  showLoading: Observable<boolean>;
  constructor(private store: Store<AppState>,
              private spinner: NgxSpinnerService) {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
  }
}
