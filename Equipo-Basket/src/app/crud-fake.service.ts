import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class CrudFakeService {
  players: Player[] = [{
                    id: 1,
                    nombre: 'Juan Carlos Navarro',
                    num: 7,
                    posicion: "Escolta",
                    edad: 43,
                    img: '/assets/img/Juan_Carlos_Navarro.jpg',
                    video: '/assets/video/Juan_Carlos_Navarro.mp4'
                  },
                  {
                    id: 2,
                    nombre: 'Pau Gasol',
                    num: 16,
                    posicion: "Ala-pivot",
                    edad: 43,
                    img: '/assets/img/Pau_Gasol.jpg',
                    video: '/assets/video/Pau_Gasol.mp4'
                  },
                  {
                    id: 3,
                    nombre: 'Marc Gasol',
                    num: 	33,
                    posicion: "Pivot",
                    edad: 39,
                    img: '/assets/img/Marc_Gasol.jpg',
                    video: '/assets/video/Marc_Gasol.mp4'
                  },
                  {
                    id: 4,
                    nombre: 'Rudy Fernandez',
                    num: 	33,
                    posicion: "Alero",
                    edad: 39,
                    img: '/assets/img/Rudy_Fernandez.jpg',
                    video: '/assets/video/Rudy_Fernandez.mp4'
                  },
                  {
                    id: 5,
                    nombre: 'Ricky Rubio',
                    num: 	9,
                    posicion: "Base",
                    edad: 33,
                    img: '/assets/img/RickyRubio.jpg',
                    video: '/assets/video/RickyRubio.mp4'
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
