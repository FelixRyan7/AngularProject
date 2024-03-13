import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadoresService } from '../jugadores.service'; 
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule, MediaComponent],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {

  @Input() jugador: any;
 

  constructor(private jugadoresService: JugadoresService) { }

  

  
}
  

