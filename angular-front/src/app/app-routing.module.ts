//arquivo de rotas

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',//se não tiver essa linha qualquer rota será redirecionada pra home, e não apenas a rota /
    redirectTo: 'home'
  },//quando chegar na rota / será redirecionado pra home
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },//dessa forma importara o homeModule apenas quando for usado e não mais no primeiro carregamento

  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }//o componente terá acesso a propriedade fotos como resultado do photolistresolver
  },
  {
    path: 'p/add',
    component: PhotoFormComponent
  },
  { 
    path: '**', 
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
