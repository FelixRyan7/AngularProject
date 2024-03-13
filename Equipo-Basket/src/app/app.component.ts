import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { DetallesComponent } from './detalles/detalles.component';
import { MediaComponent } from './media/media.component';
import { Input } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayersComponent, DetallesComponent, MediaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Equipo-Basket';
 
 
}
