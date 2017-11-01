import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PagMapComponent } from './pag-map/pag-map.component';
import { HelpComponent } from './help/help.component';
import { AcompanhamentoComponent } from './acompanhamento/acompanhamento.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    RodapeComponent,
    PagMapComponent,
    HelpComponent,
    AcompanhamentoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBxwdMHGtqBkqsftQjc6Ia5Lt_QQZF3jwA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
