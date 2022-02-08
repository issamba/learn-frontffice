import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ConnectedUserService} from "../../services/connected-user.service";
import {UtilisateurService} from "../../services/utilisateur.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;

  constructor(private connectedUserService: ConnectedUserService, public route: Router,
              private utilisateurService: UtilisateurService) {
  }

  ngOnInit(): void {
  }

  authenticate() {
    this.utilisateurService.authenticate(this.login, this.password).subscribe(resultat => {
      console.log(resultat);
      if (resultat != null) {

        const connectedUser = resultat;
        connectedUser.type = 1
        this.connectedUserService.setConnectedUser(connectedUser);
        this.route.navigateByUrl('trending');
      } else {

      }
    });

  }




}
