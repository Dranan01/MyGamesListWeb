import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Achievement } from './achievement';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  private url:string = "http://localhost:8080/achievement/"

  constructor(private http:HttpClient) { }


  //obtener logros
  getAll():Observable<Achievement[]>{
    return this.http.get<Achievement[]>(this.url);
  }



}
