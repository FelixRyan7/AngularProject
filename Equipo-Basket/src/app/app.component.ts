import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayersComponentComponent } from "./players-component/players-component.component";
import {PipeNombreComponent} from "./pipe-nombre/pipe-nombre.component";
import { FormsModule, NgModel } from '@angular/forms';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PlayersComponentComponent,PipeNombreComponent,FormsModule],
    
   
})
export class AppComponent {
  title = 'equipo-basket';
  
}
