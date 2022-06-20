import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    GameListComponent,
    GameDetailsComponent,
    DialogComponent,
    DialogDeleteComponent
    ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'gameList', component: GameListComponent },
      { path: 'profile/gameList/:username', component: GameListComponent },
      { path: 'profile/:username', component: ProfileComponent },
      { path: 'game/:name', component: GameDetailsComponent},
    ]),
    
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
