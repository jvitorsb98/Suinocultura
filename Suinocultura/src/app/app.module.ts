import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroSuinoComponent } from './components/cadastro-suino/cadastro-suino.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ListagemSuinosComponent } from './components/listagem-suinos/listagem-suinos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IdadePipe } from './pipes/idade.pipe';
import { EditarSuinoComponent } from './components/editar-suino/editar-suino.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './components/header/header.component'
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login/login.component';
import { CadastrarPesoComponent } from './components/cadastrar-peso/cadastrar-peso.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PesagemSuinosComponent } from './components/pesagem-suinos/pesagem-suinos.component';
import { EditarPesoComponent } from './components/editar-peso/editar-peso.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HomeComponent } from './components/home/home.component';
import { MatNativeDateModule } from '@angular/material/core';
import { CadastrarSessaoComponent } from './components/sessao/cadastrar-sessao/cadastrar-sessao.component';
import { CadastrarAtividadeComponent } from './components/sessao/cadastrar-atividade/cadastrar-atividade.component';
import { FinalizarSecaoComponent } from './components/sessao/finalizar-secao/finalizar-secao.component';
import { ListarSecoesComponent } from './components/sessao/listar-secoes/listar-secoes.component';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    CadastroSuinoComponent,
    ListagemSuinosComponent,
    IdadePipe,
    EditarSuinoComponent,
    HeaderComponent,
    LoginComponent,
    CadastrarPesoComponent,
    PesagemSuinosComponent,
    EditarPesoComponent,
    HomeComponent,
    CadastrarSessaoComponent,
    CadastrarAtividadeComponent,
    FinalizarSecaoComponent,
    ListarSecoesComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatOptionModule,
    MatCheckboxModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatStepperModule
  ],
  providers: [
    AuthService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    provideAnimationsAsync('noop'),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
