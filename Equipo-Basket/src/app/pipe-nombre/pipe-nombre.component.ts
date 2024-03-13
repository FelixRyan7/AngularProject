import { Component, OnInit } from '@angular/core';
import {DatosPlayersService} from '../service/datos-players.service';
import { CommonModule } from '@angular/common';
import { Player } from '../model/player';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NameFilterPipe} from '../pipe/text-filter.pipe';



@Component({
  
  selector: 'app-pipe-nombre',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule, NameFilterPipe],
  templateUrl: './pipe-nombre.component.html',
  styleUrl: './pipe-nombre.component.css',

})


export class PipeNombreComponent implements OnInit{

  filterSearch ='';
  opcion='Nombre';

  
  players: Player[]=this.datosPlayerServie.getPlayers();

  
  constructor (private datosPlayerServie:DatosPlayersService){}
  
  
  //constructor(){}

  ngOnInit():void{
   // this.getPlayers();
    
  }

}
