import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';
import { ModificarComponent } from './COMPONENTES/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
