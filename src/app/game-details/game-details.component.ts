import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, finalize } from 'rxjs';
import { Achievement } from '../classes/achievement';
import { AchievementService } from '../classes/achievement.service';
import { AchievementList } from '../classes/achievementList.';

import { Game } from '../classes/game';
import { GameService } from '../classes/game.service';

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
  constructor(private gameService:GameService, private router:ActivatedRoute, private achievementService:AchievementService) { }

  ngOnInit(): void {
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


}
