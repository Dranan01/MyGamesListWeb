import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Achievement } from './achievement';
import { AchievementList } from './achievementList.';


import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url =  "http://localhost:8080/game/"

  constructor(private http:HttpClient) { }

  getAllGames():Observable<Game[]>{
    return this.http.get<Game[]>(this.url);
  }


  getByName(name:string):Observable<Game>{
     ; 
    return this.http.get<Game>(this.url+"/details/" + name);
    
  }

  getAchievements(id:number):Observable<AchievementList>{
    console.log(this.url + id + "/achievementList");

    return this.http.get<AchievementList>(this.url + id + "/achievementList")
  }

  getGamesBySearch(search:string):Observable<Game[]>{
    return this.http.get<Game[]>(this.url +"search/" + search);
  }

}
