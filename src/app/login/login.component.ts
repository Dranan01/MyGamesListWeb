import { Component, OnInit } from '@angular/core';
import { Client } from '../classes/client';
import { ClientService } from '../classes/client.service';
import {finalize} from 'rxjs/operators';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  private client: Client;


  

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {

    
  }


  public cargar(){
    
    
    }
  


  public submit(username: string, password: string) {
    
    this.clientService.getByUsername(username).pipe(finalize(() => this.check())).subscribe(e => this.client = e);
  }

  public  check() {

    console.log("AFTER AWAIT");
    if (this.client.username != "" && !this.client.logged) {
      
      this.client.logged = true;

      console.log(this.client.logged);
      console.log(this.client);
      this.clientService.modifyClient(this.client.clientId,this.client).pipe(finalize(() => this.navigate())).subscribe();
    }
    else {
      this.error(); //TODO ya vere que hago aqui
    }
    
  }


  public navigate(){
   // window.location.href="http://Localhost:4200/profile/",this.client.username; 
    this.router.navigate(['/profile/',this.client.username]);
  }

  public error() {
    console.log("error")
  }

  

  

  
}



