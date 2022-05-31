import { Component, OnInit } from '@angular/core';
import { Client } from '../classes/client';
import { ClientService } from '../classes/client.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  client: Client;


  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

    
  }


  public cargar(){
    
    
    }
  


  public submit(username: string, password: string) {
    
    this.clientService.getByUsername(username).pipe(finalize(() => this.check())).subscribe(e => this.client = e);
  }

  public  check() {

    console.log("AFTER AWAIT");
    if (this.client.username == "") {
      this.error();
    }
    else {
      console.log(this.client.username);
      this.client.logged = true;
    }
    
  }

  public error() {
    console.log("error")
  }


  
}



