import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {PagMapComponent} from './pag-map/pag-map.component'


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'map', component: PagMapComponent}


]
