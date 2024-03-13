import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudFakeService } from '../crud-fake.service';
import {RouterModule} from '@angular/router';
import { MediaComponentComponent } from '../media-component/media-component.component';

@Component({
  selector: 'app-detail-component',
  standalone: true,
  imports: [RouterModule, MediaComponentComponent],
  templateUrl: './detail-component.component.html',
  styleUrl: './detail-component.component.css'
})
export class DetailComponentComponent implements OnInit, OnDestroy {
  id: any;
  player: any;
  private sub: any

  constructor(private route: ActivatedRoute, private crudFakeService: CrudFakeService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.player = this.crudFakeService.getPlayerById(this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}