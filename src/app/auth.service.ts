import { Injectable } from '@angular/core';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  SuperVousEtesConnecte:boolean =false;
    listeUtilisateur: Utilisateur[] = [
    {
      email: "sarah@test.fr",
      password:"test",
    },
    {
      email:"tes@test.fr",
      password:"test",
    },
    {
      email:"leprof@test.fr",
      password:"test",
    }
  ]

  constructor() { }

  estConnecte():boolean{
    return this.SuperVousEtesConnecte
    } 
    Connect(email:string, password:string):void{
      this.listeUtilisateur.map((utilisateur)=>{
        if (utilisateur.email==email && utilisateur.password==password){
          this.SuperVousEtesConnecte=true        }
      })
    }
}