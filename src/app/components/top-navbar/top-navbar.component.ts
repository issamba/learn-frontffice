import {Component, OnInit} from '@angular/core';
import {ConnectedUserService} from "../../services/connected-user.service";


@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {
  connectedUserName: string = '';

  constructor(private connectedUserService: ConnectedUserService) {
  }

  ngOnInit(): void {
    this.connectedUserService.connectedUser$.subscribe(r => {
        this.connectedUserName = r.nom + ' ' + r.prenom;
      });
  }


}
