import {Commentaire} from "./Commentaire";


export class Publication {
  public idPublication?: number;
  public enonce?: string;
  public blocked?: boolean;
  public duplicated?: boolean;
  public resolved?: boolean;
  public idCreateur?: number;
  public nomCreateur?: string;
  public commentaires ?: Commentaire[];
  public idCategorie?: number;
  public libelleCategorie?: string;
  public libelleType?: string;
  public idType?: number;
}
