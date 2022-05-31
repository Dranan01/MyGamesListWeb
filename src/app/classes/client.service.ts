import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
private url:string = "http://localhost:8080/client/"
  constructor(private http:HttpClient) { }

    //obtener clientes
    getAll():Observable<Client[]>{
      return this.http.get<Client[]>(this.url);
    }

    getByUsername(username:string):Observable<Client>{
      return this.http.get<Client>(this.url+"username"+"/"+username);
    }

}
