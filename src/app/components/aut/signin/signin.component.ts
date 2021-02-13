import { Component, OnInit } from '@angular/core';
import { Administrateur } from '../../../model/administrateur';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isLinear = false;


 admins:Administrateur[]=[]
  admi:Administrateur={
    nom:'',
    prenom:'',
    adress:'',
    email:'',
    pass:''
  }
  constructor(private admin:AuthService) { }

  ngOnInit(): void {
    this.getAdmins();


  }

  connexion(){
    this.admin.connexion(this.admi);
  }
  getErrorMessage():void{
    alert("mot de passe incorect");
  }
  getAdmins(){
     this.admin.getAdmins().subscribe(
       data=>{this.admins=data;
            console.log(data);},
      error=>console.log("error")
     );
  }

}

