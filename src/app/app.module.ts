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
import { AchievementListComponent } from './achievement-list/achievement-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    GameListComponent,
    AchievementListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'gameList', component: GameListComponent },
      { path: 'profile/:username', component: ProfileComponent },
      { path: 'game/:id/achievements', component: AchievementListComponent },
      { path: 'game/:id', component: GameDetailsComponent},
    ]),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
