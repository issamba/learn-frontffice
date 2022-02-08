export class ConnectedUser {
  public idUtilisateur?: number;
  public nom ?: string;
  public prenom ?: string;
  public login ?: string;
  //0 : admin , 1 : membre
  public type ?: number;

  constructor(id?: number) {

    this.idUtilisateur = id;
  }
}
