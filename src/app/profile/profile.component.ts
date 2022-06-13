import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { finalize } from 'rxjs';
import { Client } from '../classes/client';
import { ClientService } from '../classes/client.service';
import { Game } from '../classes/game';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username:string | null
  client:Client  
  urlTree:any;
  game:Game[];
  url:string
   username1:string;
  constructor(private router: ActivatedRoute,private routerDeactivated:Router , private clientService:ClientService) { }

  ngOnInit(): void {
    this.username = this.router.snapshot.paramMap.get("username")!;
    this.loadClient(this.username);
    
    console.log(this.username)
    
    
   
  



  }





private getGames(){
  this.clientService.getGameList(this.client.clientId).subscribe(list => this.game = list);
  
}


loadClient(username:string):void{
  this.clientService.getByUsername(this.username!).pipe(finalize(() => (null))).subscribe(e => this.client = e);
 
}

navigate(){
  this.routerDeactivated.navigate(["profile/gameList",this.username]);
}


}
