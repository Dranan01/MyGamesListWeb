import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';
import { ClientNoId } from './clientNoId';

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

}
