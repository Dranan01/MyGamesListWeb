import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Client } from '../classes/client';
import { ClientService } from '../classes/client.service';
import { ClientGames } from '../classes/clientGames';
import { Game } from '../classes/game';
import { GameService } from '../classes/game.service';

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
    
    this.clientService.getByUsername(username).pipe(finalize(() => (console.log(this.client.username)))).subscribe(e => this.client = e);
    
  }


  public saveGameToClientList(gameId:any){
    this.clientService.addToGameList(gameId,this.client.clientId).pipe(finalize(() => (console.log("game list loaded")))).subscribe(e => this.clientGames = e);
    console.log(this.clientGames.games.length);
  }


  public navigate(name:string){
     
    this.router.navigate(['/game/', name]);
   }


}
