import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { Achievement } from '../classes/achievement';
import { AchievementService } from '../classes/achievement.service';

@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss']
})
export class AchievementListComponent implements OnInit {

  achievements:Achievement[]
  constructor(private achievementService:AchievementService) { }

  ngOnInit(): void {
    this.loadAchievements();


  }



  private loadAchievements():void{
    this.achievementService.getAll().pipe(finalize(() => (null))).subscribe(e =>  this.achievements = e);
  }



}
