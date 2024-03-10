import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrudFakeService } from '../crud-fake.service';

import { Player } from '../player';
@Component({
  selector: 'app-players-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './players-component.component.html',
  styleUrl: './players-component.component.css'
})
export class PlayersComponentComponent {
  players: Player[] = [];

  constructor(private crudFakeService: CrudFakeService){}

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.players = this.crudFakeService.getPlayers();
  }
}
