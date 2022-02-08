import {Component, OnInit} from '@angular/core';
import {PublicationService} from "../../services/publication.service";
import {ActivatedRoute} from "@angular/router";
import {Publication} from "../../models/Publication";
import {ConnectedUser} from "../../models/ConnectedUser";
import {ConnectedUserService} from "../../services/connected-user.service";
import {CommentaireService} from "../../services/commentaire.service";
import {Commentaire} from "../../models/Commentaire";
import {Reaction} from "../../models/Reaction";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  publication: Publication = new Publication();
  connectedUser: ConnectedUser;
  createNewCommentaire: boolean = false;
  public enonce: string;

  constructor(private  publicationService: PublicationService, private route: ActivatedRoute,
              private commentaireService: CommentaireService,
              private connectedUserService: ConnectedUserService
  ) {
    this.connectedUserService.connectedUser$
      .subscribe(result => {
        this.connectedUser = result
      });
  }

  ngOnInit(): void {
    const idPublication = Number.parseInt(this.route.snapshot.paramMap.get('idPublication') as string, 10);
    this.publicationService.getPublicationById(idPublication).subscribe(result => {
      this.publication = result;
    });
  }


  updatePublication() {

  }

  likeComment(idCommentaire: number) {
    const reaction = new Reaction();
    reaction.idCommentaire = idCommentaire;
    reaction.liked = 1;
    reaction.idUtilisateur = this.connectedUser.idUtilisateur;
    this.commentaireService.react(reaction).subscribe(re => {
      this.publicationService.getPublicationById(this.publication.idPublication).subscribe(result => {
        this.publication = result;
      });
    })
  }


  addNewCommentaire() {
    this.createNewCommentaire = true
    this.enonce = null;
  }

  abortAddCommentaire() {
    this.createNewCommentaire = false
  }

  showLikeBouton(idCommentaire: number) {
    return this.publication.commentaires.find(el => el.idCommentaire === idCommentaire).reactions.find(el => el.idUtilisateur === this.connectedUser.idUtilisateur) == null;
  }

  addComment() {
    const commentaire = new Commentaire();
    commentaire.enonce = this.enonce;
    commentaire.idCreateur = this.connectedUser.idUtilisateur;
    commentaire.idPublication = this.publication.idPublication;
    this.commentaireService.createCommentaire(commentaire).subscribe(res => {
      this.createNewCommentaire = false
      this.publicationService.getPublicationById(this.publication.idPublication).subscribe(result => {
        this.publication = result;
      });
    })
  }

  valider(commentaire: Commentaire) {
    commentaire.checked = 1;
    this.commentaireService.update(commentaire).subscribe(result => {
      this.publicationService.getPublicationById(this.publication.idPublication).subscribe(result => {
        this.publication = result;
      });
    });
  }

  resetvalider(commentaire: Commentaire) {
    commentaire.checked = null;
    this.commentaireService.update(commentaire).subscribe(result => {
      this.publicationService.getPublicationById(this.publication.idPublication).subscribe(result => {
        this.publication = result;
      });
    });
  }

  delete(idCommentaire: number) {
    this.commentaireService.delete(idCommentaire).subscribe(result => {
      this.publicationService.getPublicationById(this.publication.idPublication).subscribe(result => {
        this.publication = result;
      });
    });
  }
}
