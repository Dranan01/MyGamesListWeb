import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Client } from '../classes/client';
import { ClientService } from '../classes/client.service';
import { ClientGames } from '../classes/clientGames';
import { Game } from '../classes/game';
import { GameService } from '../classes/game.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  clientGames:ClientGames;
  games:Game[];
  name:string;
  client:Client;
  isClient:boolean;
  isMenu:boolean


  constructor(private gameService:GameService,private clientService:ClientService, private renderer:Renderer2, private router:Router, private activRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadGames();
    this.loadClient();
    this.renderer.setStyle(document.body, "background","lightblue");
    
    
  }



  private loadGames(){
    this.gameService.getAllGames().pipe(finalize(() => (null))).subscribe(e => this.games = e);
  }

  private loadClient(){
    let username = this.activRouter.snapshot.paramMap.get("username")!
    
    this.client = LogService.client;

    if(username != null){
      this.isClient = true;
    }
    
  }


  public saveGameToClientList(gameId:any){
    this.clientService.addToGameList(gameId,this.client.clientId).pipe(finalize(() => (console.log("game list loaded")))).subscribe(e => this.clientGames = e);
  }


  public navigate(name:string){
     
    this.router.navigate(['/game/', name]);
   }


   public navigateToProfile(username:string){
    this.router.navigate(['/profile/',username])
   }

   public getBySearch(search:string){
    if(search.length < 1){
      this.gameService.getAllGames().subscribe(args => this.games = args);
    }
    else{
      this.gameService.getGamesBySearch(search).subscribe(arg => this.games = arg);

    }
      
   }


 



   showMenu(){
    if(this.isMenu){
      this.isMenu = false
    }
    else{
      this.isMenu = true;
    }
   }


   disconnect(){
    window.location.href="http://localhost:4200";
    this.clientService.modifyClient(this.client.clientId,this.client).subscribe();
    
   }

}
