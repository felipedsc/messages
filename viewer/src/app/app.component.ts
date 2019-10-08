import { Component } from '@angular/core';
import { ValuesClient, MessageClient, IMessageDto, MessageDto } from './clients/values-client';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sent = false;
  constructor(private messageClient: MessageClient) {

  }

  send(message: string) {
    this.sent = false;

    this.messageClient.send(<MessageDto>{ message })
      .pipe(take(1))
      .subscribe(response => {
        debugger;
        this.sent = response;
      }, error => {
        debugger;
      });
  }
}
