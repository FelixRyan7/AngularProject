import { Routes } from '@angular/router';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { MediaComponentComponent  } from './media-component/media-component.component';


export const routes: Routes = [
    {path: 'player', component: DetailComponentComponent},
    {path: 'video', component: MediaComponentComponent},
];
