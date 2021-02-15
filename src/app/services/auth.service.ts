import { Injectable } from '@angular/core';
import { Administrateur } from '../model/administrateur';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl="http://localhost:8080/HighTechProje/rest/admins"

  admin:Administrateur={
    nom:"sow",
    prenom:"maodo",
    adress:"77500 Chelles",
    email:"maodo@gmail.com",
    pass:"passer1234",

  }
  constructor(private http:HttpClient) { }

connexion(adm:Administrateur): void{
  if(adm.email===this.admin.email && adm.pass===this.admin.pass)
    alert("autentification reussit avec succes");
  else
    alert("erreur d'authentification");

}
getAdmins():Observable<any>{
  return this.http.get(this.baseUrl);
}

}
