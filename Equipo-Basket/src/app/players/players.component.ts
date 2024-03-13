import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadoresService } from '../jugadores.service'; 
import { DetallesComponent } from '../detalles/detalles.component';
import { MediaComponent } from '../media/media.component';




@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, DetallesComponent, MediaComponent],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent{
  
  listaJugadores:{nombre:string, apellidos:string, posicion:string, edad:number, altura:string, video:string }[] = [];
  jugador: any;
  videosPath = 'assets/';
  videoName: any;
  videoPath: any;
  

  
  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit(): void {
    this.listaJugadores = this.jugadoresService.obtenerJugadores();
  }

   mostrarDetallesYVideo(nombre: string){ 
    this.mostrarDetalles(nombre);
    this.showPlayerVideo(nombre);
   }
  
  mostrarDetalles(nombre: string) {
    this.jugador = this.jugadoresService.obtenerDetallesJugador(nombre);
    this.showPlayerVideo(nombre);
    
  
  }
  
  showPlayerVideo(playerName: string) {

    // console.log(playerName + '.mp4');
    this.videoName = playerName + '.mp4';
    this.videoPath = this.videosPath + this.videoName;

    console.log(this.videoPath);
    console.log(this.videoName);
    console.log(this.videoPath)
    
  }

}
