import { FinalizarSecaoComponent } from './components/sessao/finalizar-secao/finalizar-secao.component';
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
import { ListarSecoesComponent } from './components/sessao/listar-secoes/listar-secoes.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'cadastro_suino', component: CadastroSuinoComponent, canActivate: [AuthGuard] },
  { path: 'cadastro_peso_suino', component: CadastrarPesoComponent, canActivate: [AuthGuard] },
  { path: 'listagem_peso_suino', component: ListagemSuinosComponent, canActivate: [AuthGuard] },
  { path: 'listagem_peso_suino_grafico', component: PesagemSuinosComponent, canActivate: [AuthGuard] },
  { path: 'cadastro_atividade', component: CadastrarAtividadeComponent, canActivate: [AuthGuard] },
  { path: 'cadastro_sessao', component: CadastrarSessaoComponent, canActivate: [AuthGuard] },
  { path: 'listagem_sessoes', component: ListarSecoesComponent , canActivate: [AuthGuard]},
  { path: 'sessao/finalizar/:id', component: FinalizarSecaoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: LoginComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
