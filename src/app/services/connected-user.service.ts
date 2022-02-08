import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {ConnectedUser} from "../models/ConnectedUser";

@Injectable({
  providedIn: 'root'
})
export class ConnectedUserService {

  private subject: Subject<ConnectedUser> = new BehaviorSubject<ConnectedUser>(new ConnectedUser());
  public connectedUser$ = this.subject.asObservable();

  constructor() {

  }


  setConnectedUser(connectedUser: ConnectedUser) {
    this.subject.next(connectedUser)
  }

  cleanConnectedUser() {
    this.subject.next(null);
  }
}
