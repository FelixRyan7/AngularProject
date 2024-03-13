import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { DetallesComponent } from './detalles/detalles.component';
import { MediaComponent } from './media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    DetallesComponent, 
    MediaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }