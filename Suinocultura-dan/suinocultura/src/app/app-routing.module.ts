import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroSuinoComponent } from './components/cadastro-suino/cadastro-suino.component';
import { ListagemSuinosComponent } from './components/listagem-suinos/listagem-suinos.component';
import { LoginComponent } from './login/login/login.component';
import { CadastrarPesoComponent } from './components/cadastrar-peso/cadastrar-peso.component';
import { AuthGuard } from './guards/guard.guard';
import { PesagemSuinosComponent } from './components/pesagem-suinos/pesagem-suinos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'cadastro', component: CadastroSuinoComponent, canActivate: [AuthGuard] },
  { path: 'registro', component: CadastrarPesoComponent, canActivate: [AuthGuard] },
  { path: 'listagem', component: ListagemSuinosComponent, canActivate: [AuthGuard] },
  {path: 'pesagem', component: PesagemSuinosComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: LoginComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
