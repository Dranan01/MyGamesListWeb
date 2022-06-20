import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AppComponent } from '../app.component';
import { Client } from '../classes/client';
import { ClientService } from '../classes/client.service';
import { ClientNoId } from '../classes/clientNoId';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  newClient:ClientNoId
  creado:boolean = false;
  router1:RouterLink;


  constructor(private clientService: ClientService, private router:Router) { }
  
  ngOnInit(): void {
  }


  public navigate(){
    window.location.href="http://Localhost:4200/profile/" + this.newClient.username; 
  }

  navigateToLogin(){
    window.location.href="http://Localhost:4200"
  }

  public addClient(username:any , password:any, email:any){
    this.newClient = {username: username, password: password, email:email,description:"",logged:true,profilePic:""};
    this.clientService.createClient(this.newClient).subscribe((response:ClientNoId) => this.navigate());

  } 


}
