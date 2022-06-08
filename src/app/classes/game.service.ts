import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

}
