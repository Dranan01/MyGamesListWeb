import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Client } from './client';
import { ClientGames } from './clientGames';
import { ClientNoId } from './clientNoId';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
private url:string = "http://localhost:8080/client"
  constructor(private http:HttpClient) { }

    //obtener clientes
    getAll():Observable<Client[]>{
      return this.http.get<Client[]>(this.url);
    }

    getByUsername(username:string):Observable<Client>{
      
      return this.http.get<Client>(this.url+"/"+ "username"+"/"+username);
      
    }

    createClient(client:ClientNoId):Observable<ClientNoId>{
      console.log(client);
      return this.http.post<ClientNoId>(this.url, client);
      
    }

    modifyClient(id:string,client:Client):Observable<void>{
      
      console.log(this.url + "/"+ client.clientId);
      return this.http.put<void>(this.url + "/"+ client.clientId, client)

      
    }

    getGameList(id:string):Observable<Game[]>{
      return this.http.get<Game[]>(this.url+"/"+ id+ "/GameList");
    }

    addToGameList(gameid:string, clientid:string){
      console.log(this.url+"/"+clientid+"/game/"+gameid);
      return this.http.get<ClientGames>(this.url+"/"+clientid+"/game/"+gameid);
    }


}
