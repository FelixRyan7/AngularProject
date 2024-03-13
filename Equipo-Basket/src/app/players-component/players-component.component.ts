import { Component } from '@angular/core';
import {DatosPlayersService} from '../service/datos-players.service';
import { Player } from '../model/player';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-players-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './players-component.component.html',
  styleUrl: './players-component.component.css'
})
export class PlayersComponentComponent {

  players: Player[]=[];

  constructor (private datosPlayerServie:DatosPlayersService){}

  ngOnInit():void{
    this.getPlayers();
    
  }

  getPlayers(): void {
    this.players=this.datosPlayerServie.getPlayers();
  }


}
