import {Reaction} from "./Reaction";


export class Commentaire {

  public idCommentaire ?: number;
  public checked ?: number;
  public idCommentaireParent ?: number;
  public idCreateur ?: number;
  public enonce?: string;
  public nomCreateur?: string;
  public date?: Date;
  public idPublication?: number;
  public reactions ?:Reaction[];
}
