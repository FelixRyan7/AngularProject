import { Injectable } from '@angular/core';
import jugadores from './Jugadores.json';

export interface Jugador {
  nombre: string;
  apellidos: string;
  posicion: string;
  edad: number;
  altura: string;
  video: string;
}

@Injectable({
  providedIn: 'root'
})


export class JugadoresService {
  jugador: any;
  videosPath = 'assets/';
  videoName: any;
  videoPath: any;

  constructor() { }

  setJugador(jugador: any) {
    this.jugador = jugador;
  }

  getJugador() {
    return this.jugador;
  }

  

  obtenerJugadores() {
    return jugadores;
  }

  obtenerDetallesJugador(nombre: string): Jugador | undefined {
    return jugadores.find((jugadores: Jugador) => jugadores.nombre === nombre);
    
  }

  

}
