import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, finalize } from 'rxjs';
import { Achievement } from '../classes/achievement';
import { AchievementService } from '../classes/achievement.service';
import { AchievementList } from '../classes/achievementList.';
import { ClientService } from '../classes/client.service';

import { Game } from '../classes/game';
import { GameService } from '../classes/game.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
 name:string
 game:Game
 achievementList:AchievementList; 
 achievements:Achievement[];
 showAch:boolean = false;
  constructor(private gameService:GameService, private router:ActivatedRoute, private achievementService:AchievementService, private renderer:Renderer2, private clientService:ClientService) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, "background","lightblue");
    this.name = this.router.snapshot.paramMap.get("name")!;
    this.loadGame();
    
    

  }




   private loadGame(){
     this.gameService.getByName(this.name).pipe(finalize(() => (null))).subscribe(e => this.game = e);

     
     

   }

    loadAchievements(id:number){

     if(this.showAch===false){
      this.showAch = true;
      this.gameService.getAchievements(id).pipe(finalize(()=>(this.achievements = this.achievementList.achievements))).subscribe(a => this.achievementList = a);
     }
     else{
      this.showAch = false;
     }
    
    
   }


   navigate() {
    window.history.back();
  }


  @HostListener('window:beforeunload')
  onUnload() {
    LogService.client.logged = false;
    this.clientService.modifyClient(LogService.client.clientId,LogService.client).subscribe();

    return false;
  }

}
