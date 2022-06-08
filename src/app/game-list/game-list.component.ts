import { Component, OnInit, Renderer2 } from '@angular/core';
import { finalize } from 'rxjs';
import { Game } from '../classes/game';
import { GameService } from '../classes/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games:Game[];
  constructor(private gameService:GameService, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.loadGames();
    this.renderer.setStyle(document.body, "background","lightblue");
  }



  private loadGames():void{
    this.gameService.getAllGames().pipe(finalize(() => (null))).subscribe(e => this.games = e);
 
  }


}
