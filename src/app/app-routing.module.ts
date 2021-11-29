import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { CustomizaveisComponent } from './customizaveis/customizaveis.component';
import { EstilosComponent } from './estilos/estilos.component';
import { HomeComponent } from './home/home.component';
import { InfantilComponent } from './infantil/infantil.component';
import { MeninasComponent } from './meninas/meninas.component';
import { MeninosComponent } from './meninos/meninos.component';
import { MenuComponent } from './menu/menu.component';
import { PecasComponent } from './pecas/pecas.component';
import { PranchasComponent } from './pranchas/pranchas.component';
import { RolamentosComponent } from './rolamentos/rolamentos.component';
import { ShapesComponent } from './shapes/shapes.component';
import { SurfeComponent } from './surfe/surfe.component';


declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;                          //codigo que eu coloquei
      providers?: Provider[];
  }
}

const routes: Routes = [{   //primeiro passo
  path: '',
  component: HomeComponent
},{
  path: 'acessorios',
  component: AcessoriosComponent
},{path: "", redirectTo:'/inicio', pathMatch: 'full',
},{
  path: 'menu',
  component: MenuComponent
},{

  path: 'shapes',
  component: ShapesComponent
},{

  path: 'customizaveis',
  component: CustomizaveisComponent
},{

  path: 'infantil',
  component: InfantilComponent
},{

  path: 'meninas',
  component: MeninasComponent
},{

  path: 'meninos',
  component: MeninosComponent
},{

  path: 'rolamentos',
  component: RolamentosComponent
},{

  path: 'pecas',
  component: PecasComponent
},{

  path: 'estilos',
  component: EstilosComponent
},{

  path: 'pranchas',
  component: PranchasComponent
},{

  path: 'surfe',
  component: SurfeComponent
},{

  path: 'home',
  component: HomeComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
