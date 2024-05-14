import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroSuinoComponent } from './components/cadastro-suino/cadastro-suino.component';
import { ListagemSuinosComponent } from './components/listagem-suinos/listagem-suinos.component';
import { LoginComponent } from './login/login/login.component';
import { CadastrarPesoComponent } from './components/cadastrar-peso/cadastrar-peso.component';
import { AuthGuard } from './guards/guard.guard';
import { PesagemSuinosComponent } from './components/pesagem-suinos/pesagem-suinos.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarAtividadeComponent } from './components/sessao/cadastrar-atividade/cadastrar-atividade.component';
import { CadastrarSessaoComponent } from './components/sessao/cadastrar-sessao/cadastrar-sessao.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroSuinoComponent },
  { path: 'registro', component: CadastrarPesoComponent },
  { path: 'listagem', component: ListagemSuinosComponent },
  { path: 'pesagem', component: PesagemSuinosComponent},
  { path: 'atividade/cadastro', component: CadastrarAtividadeComponent },
  { path: 'sessao/cadastro', component: CadastrarSessaoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: LoginComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
