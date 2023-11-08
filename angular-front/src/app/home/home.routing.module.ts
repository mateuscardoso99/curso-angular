//cada modulo que quiser carregar sob demanda(para diminuir o tempo de carregamento das paginas) 
//terá o seu próprio arquivo de rotas

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin-component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '',//no app.routing é definido uma rota 'home' que carregara esse arquivo por isso não precisa colocar 'home' tambem aqui
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: SignInComponent,
            },
            {
                path: 'signup',
                component: SignUpComponent,
            }
        ]//rotas filhas que serão renderizadas dentro do HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],//arquivo de rota que nao seja o app.routing tem q ser forChild
  exports: [RouterModule]
})
export class HomeRoutingModule { }
