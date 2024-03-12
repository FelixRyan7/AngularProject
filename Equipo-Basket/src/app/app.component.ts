import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaComponentComponent } from './media-component/media-component.component';

declare var $: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MediaComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'Equipo-Basket';

    constructor(){

    }
    ngOnInit(){
      
    }
}
