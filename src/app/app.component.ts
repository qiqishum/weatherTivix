import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from './loading-spinner/shared/app.state';
import {getLoading} from './loading-spinner/shared/shared.selector';
import {setLoadingSpinner} from './loading-spinner/shared/shared.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherTivix';
  showLoading: Observable<boolean>;

  constructor(private store: Store<AppState>,
  ) {

  }

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    this.store.dispatch(setLoadingSpinner({status: true}));
    setTimeout(() => {
      this.store.dispatch(setLoadingSpinner({status: false}));

    }, 1000);
  }
}
