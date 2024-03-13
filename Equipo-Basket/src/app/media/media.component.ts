import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadoresService } from '../jugadores.service'; 

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {

  @Input() jugador: any;
  @Input() videoName: any;
  @Input() videoPath: any;
  

  constructor() {
     
   }
 
   
  }

  

