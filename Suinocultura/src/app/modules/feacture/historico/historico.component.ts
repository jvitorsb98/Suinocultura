import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../shared/services/database.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Suino } from '../../shared/model/suino';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  suino = {} as Suino;
  id = '';
  mostarGraficoPeso: boolean = false;
  mostarGraficoAtividade: boolean = false;
  historico: { data: string; descricao: string; detalhes: string; }[] = [];

  constructor(
    private dataBase: DatabaseService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.dataBase.getSuinoPorBrinco(this.id).subscribe((response) => {
      if (response) {
        this.suino = response;
        this.suino.brinco = this.id;
      } else {
        console.log("Suíno não encontrado");
      }
    });

    this.dataBase.getHistoricoSuino(this.id).subscribe((response) => {
      this.historico = response;
    });
  }

  formatarData(data: string): string {
    return this.datePipe.transform(data, 'dd/MM/yyyy') ?? '';
  }

  exibirGraficoPeso() {
    this.mostarGraficoPeso = !this.mostarGraficoPeso;
  }

  exibirGraficoAtividade() {
    this.mostarGraficoAtividade = !this.mostarGraficoAtividade;
  }
}
