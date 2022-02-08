import {Component} from '@angular/core';
import {ConnectedUserService} from "./services/connected-user.service";
import {ConnectedUser} from "./models/ConnectedUser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  connectedUser = new ConnectedUser();

  constructor(private connectedUserService: ConnectedUserService) {
    this.connectedUserService.connectedUser$.subscribe(r => {
      this.connectedUser = r;
    })
  }


}
