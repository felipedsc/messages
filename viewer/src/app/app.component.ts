import { Component } from '@angular/core';
import { ValuesClient } from './clients/values-client';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = 'initial value';
  constructor(private valuesClient: ValuesClient) {

  }

  testApi() {
    this.valuesClient.getAll()
      .pipe(take(1))
      .subscribe(response => this.value = response.join(', '));
  }
}
