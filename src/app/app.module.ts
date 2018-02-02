import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

//Rutas
import { routing, appRoutingProviders } from './app.routing';
//Componentes
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index.component';
import { SesionComponent } from './components/sesion.component';
import { RegistroComponent } from './components/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SesionComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
