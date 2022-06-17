import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, HostListener, OnInit, Renderer2,ElementRef,ViewChild } from '@angular/core';
import { PatternValidator } from '@angular/forms';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { finalize } from 'rxjs';
import { Client } from '../classes/client';
import { ClientService } from '../classes/client.service';
import { ClientGames } from '../classes/clientGames';
import { Game } from '../classes/game';
import { LogService } from '../log.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string | null
  id: string = "";
  client: Client
  urlTree: any;
  list: ClientGames;
  loaded: boolean;
  loadedClient: boolean;
  isRealClient:boolean = false;
  isEditable:boolean = false;
  

  constructor(private router: ActivatedRoute, private routerDeactivated: Router, private clientService: ClientService, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, "background","lightblue");
    this.username = this.router.snapshot.paramMap.get("username")!;
    this.loadClient(this.username);
 
    console.log(this.username)






  }






  private async getGames() {
    if (this.loadedClient) {
      await this.clientService.getGameList(this.id).pipe(finalize(() => (this.loaded = true, console.log(this.list.game)))).subscribe(list => this.list = list);
      console.log(LogService.client);
      
    }
   
  }


  loadClient(username: string): void {
    this.clientService.getByUsername(this.username!).pipe(finalize(() => (this.loadedClient = true,
        this.id = this.client.clientId,
        this.getGames(), 
        this.checkClient()
        ))).subscribe(e => this.client = e);
        
  
  }

  navigate() {
    this.routerDeactivated.navigate(["profile/gameList", this.username]);
  }


  @HostListener('window:beforeunload')
  onUnload() {
    this.client.logged = false;
    this.clientService.modifyClient(this.client.clientId,this.client);

    return false;
  }

  checkClient(){
    console.log("hola");
    if (this.loadedClient) {
    if(LogService.client.logged === true){  this.isRealClient = true}
  } 
}

 editable(){
  if(this.isEditable === false){
    this.isEditable = true;
    document.getElementById("desc")!.style.display ="block";
  }
  else{
    this.isEditable = false;
    document.getElementById("desc")!.style.display ="none";
  }
 }


  editDescription(description:string){

   
    var newDesc = description
    this.client.description = newDesc;
      
    
    console.log(this.client);
    this.clientService.modifyClient(this.client.clientId,this.client).pipe(finalize(() => this.editable())).subscribe();
  } 


}
