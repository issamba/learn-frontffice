import {Injectable} from '@angular/core';
import {DataserviceService} from "./dataservice.service";
import {Observable} from "rxjs";
import {Publication} from "../models/Publication";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private PUBLICATION_ENDPOINT_ROOT = "publication"

  constructor(private dataserviceService: DataserviceService) {
  }

  getPublicationById(id: number): Observable<Publication> {
    return this.dataserviceService.get(this.PUBLICATION_ENDPOINT_ROOT + "/", {id: id});
  }

  getTrendingPublications(): Observable<Publication[]> {
    return this.dataserviceService.get(this.PUBLICATION_ENDPOINT_ROOT + "/getTrendingPublications");
  }

}
