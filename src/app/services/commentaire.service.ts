import {Injectable} from '@angular/core';
import {DataserviceService} from "./dataservice.service";
import {Commentaire} from "../models/Commentaire";
import {Observable} from "rxjs";
import {Reaction} from "../models/Reaction";

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private COMMENTAIRE_ENDPOINT_ROOT = "commentaire"

  constructor(private dataserviceService: DataserviceService) {
  }

  createCommentaire(comment: Commentaire): Observable<Commentaire> {
    return this.dataserviceService.post(this.COMMENTAIRE_ENDPOINT_ROOT + "/", comment)
  }

  react(comment: Reaction): Observable<Reaction> {
    return this.dataserviceService.post(this.COMMENTAIRE_ENDPOINT_ROOT + "/react", comment)
  }

  update(commentaire: Commentaire): Observable<Commentaire> {
    return this.dataserviceService.put(this.COMMENTAIRE_ENDPOINT_ROOT + "/", commentaire);
  }

  delete(idCommentaire: number) {
    return this.dataserviceService.customDelete(this.COMMENTAIRE_ENDPOINT_ROOT + "/", {idCommentaire: idCommentaire});
  }
}
