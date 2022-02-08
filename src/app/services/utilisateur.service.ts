import {Injectable} from '@angular/core';
import {DataserviceService} from "./dataservice.service";
import {Observable} from "rxjs";
import {Utilisateur} from "../models/Utilisateur";
import {ConnectedUser} from "../models/ConnectedUser";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private UTILISATEUR_ENDPOINT_ROOT = "utilisateur"

  constructor(private dataserviceService: DataserviceService) {
  }

  authenticate(login, password): Observable<ConnectedUser> {
    return this.dataserviceService.get(this.UTILISATEUR_ENDPOINT_ROOT + "/authentificate", {
      login: login,
      password: password
    })
  }
}
