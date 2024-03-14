import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadoresService } from '../jugadores.service'; 
import { DetallesComponent } from '../detalles/detalles.component';
import { MediaComponent } from '../media/media.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayerFilterPipe } from '../player-filter.pipe';




@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, FormsModule, DetallesComponent, MediaComponent, PlayerFilterPipe],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent{
  
  listaJugadores:{nombre:string, apellidos:string, posicion:string, edad:number, altura:string, video:string }[] = [];
  jugador: any;
  videosPath = 'assets/';
  videoName: any;
  videoPath: any;
  selectedAge: number = 0; // Inicializa la edad seleccionada como "Todos"
  selectedPosition: string = ''; // Inicializa la posición seleccionada como "Todos"
  ageOptions: number[] = [];
  

  
  constructor(private jugadoresService: JugadoresService) { 
    this.generateAgeOptions();
  }

  generateAgeOptions(): void {
    for (let i = 18; i <= 50; i++) {
      this.ageOptions.push(i);
      console.log(this.selectedAge)
      
    }
  }

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
