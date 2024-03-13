import { Injectable } from '@angular/core';
import {Player} from "../model/player";

@Injectable({
  providedIn: 'root'
})

export class DatosPlayersService {

  players: Player[] = [{
    id: 1,
    nombre: 'Juan Carlos Navarro',
    num: 7,
    posicion: "Escoltass",
    edad: 43,
    img: '../assets/img/Juan_Carlos_Navarro.jpg'
  },
  {
    id: 2,
    nombre: 'Pau Gasol',
    num: 16,
    posicion: "Ala-pivot",
    edad: 43,
    img: '../assets/img/Pau_Gasol.jpg'
  },
  {
    id: 3,
    nombre: 'Marc Gasol',
    num: 	33,
    posicion: "Pivot",
    edad: 39,
    img: '../assets/img/Marc_Gasol.jpg'
  },
  {
    id: 4,
    nombre: 'Rudy Fernandez',
    num: 	33,
    posicion: "Alero",
    edad: 39,
    img: '../assets/img/Rudy_Fernandez.jpg'
  },
  {
    id: 5,
    nombre: 'Ricky Rubio',
    num: 	9,
    posicion: "Base",
    edad: 33,
    img: '../assets/img/RickyRubio.jpg'
  }];

newPlayer: any = {};

  addPlayer() {
  this.players.push(this.newPlayer);
  this.newPlayer = {};
  }

  getPlayers() {
  return this.players;
  }

  getPlayerById(id:number){
  return this.players.find(player => player.id === id);
  }

  updatePlayer(index: number, updatedPlayer: any) {
  this.players[index] = updatedPlayer;
  }

  deletePlayer(index: number) {
  this.players.splice(index, 1);
  }
}
