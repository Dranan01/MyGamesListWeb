import { Injectable } from '@angular/core';
import { Client } from './classes/client';

@Injectable({
  providedIn: 'root'
})
export class LogService {

static client:Client

  constructor() { }


  static setClient(newClient:Client){
 LogService.client = newClient;
  }


}
