import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {PagMapComponent} from './pag-map/pag-map.component';
import {HelpComponent} from './help/help.component';
import {AcompanhamentoComponent} from './acompanhamento/acompanhamento.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'map', component: PagMapComponent},
  {path: 'help', component: HelpComponent},
  {path: 'acompanhamento', component: AcompanhamentoComponent}
]
