import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayersComponentComponent } from './players-component/players-component.component';

declare var $: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayersComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Equipo-Basket';

 
}
