import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { MenuComponent } from './menu/menu.component';
import { ShapesComponent } from './shapes/shapes.component';
import { CustomizaveisComponent } from './customizaveis/customizaveis.component';
import { InfantilComponent } from './infantil/infantil.component';
import { MeninasComponent } from './meninas/meninas.component';
import { MeninosComponent } from './meninos/meninos.component';
import { PecasComponent } from './pecas/pecas.component';
import { EstilosComponent } from './estilos/estilos.component';
import { RolamentosComponent } from './rolamentos/rolamentos.component';
import { PranchasComponent } from './pranchas/pranchas.component';
import { SurfeComponent } from './surfe/surfe.component';

@NgModule({
  declarations: [
    AppComponent,
    AcessoriosComponent,
    MenuComponent,
    ShapesComponent,
    CustomizaveisComponent,
    InfantilComponent,
    MeninasComponent,
    MeninosComponent,
    PecasComponent,
    EstilosComponent,
    RolamentosComponent,
    PranchasComponent,
    SurfeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
