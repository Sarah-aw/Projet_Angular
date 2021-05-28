import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { Utilisateur } from  '../utilisateur';
import { AuthService } from  '../auth.service';
 
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  isconnectable:boolean=false
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
})
  isSubmitted  =  false;
  constructor(private authService: AuthService,
    private router: Router, private formBuilder: FormBuilder ) { }
    ngOnInit() { 
  }
  get formControls() { return this.loginForm.controls; }
  seConnecter(){
    const connexionUtilisateur: Utilisateur = this.loginForm.value;
    this.authService.Connect(connexionUtilisateur.email, connexionUtilisateur.password)
    this.isconnectable=this.authService.estConnecte()
    console.log(this.loginForm.value);
  }
 
}