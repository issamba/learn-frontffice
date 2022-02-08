import {Component, OnInit} from '@angular/core';
import {Publication} from "../../models/Publication";
import {PublicationService} from "../../services/publication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trending-publication',
  templateUrl: './trending-publication.component.html',
  styleUrls: ['./trending-publication.component.css']
})
export class TrendingPublicationComponent implements OnInit {
  publications: Publication[] = [];

  constructor(private  publicationService: PublicationService, private router: Router) {

  }

  ngOnInit(): void {
    this.publicationService.getTrendingPublications().subscribe(result => {
      this.publications = result;
    })

  }


  public showPublication(idPublication: number) {
    this.router.navigate(['publication', {idPublication: idPublication}]);
  }



}
