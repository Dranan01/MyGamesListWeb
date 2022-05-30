import { Component, OnInit } from '@angular/core';
import { Client } from '../classes/client';
import { ClientService } from '../classes/client.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  clients:Client[];

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.clientService.getAll().subscribe(e => this.clients = e);

  }

  public submit(username:any, password:string){

    this.username = username;
    this.password = password;
    console.log(username);
    this.login();

  }


  public login(){
    
    this.clients.forEach(element => {
        console.log(element.username);
    });
  }
}

