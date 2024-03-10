import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DatabaseService } from '../../services/database.service';
import { Suino } from '../../model/suino';

@Component({
  selector: 'app-pesagem-suinos',
  templateUrl: './pesagem-suinos.component.html',
  styleUrls: ['./pesagem-suinos.component.css']
})
export class PesagemSuinosComponent implements OnInit {
  @ViewChild("graficoSuinos") elemento!: ElementRef;

  brincoSuino: string = "";
  suinoEncontrado: boolean = false;
  suinoSelecionado: Suino | null = null;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.buscarSuino();
  }

  buscarSuino() {
    this.databaseService.getSuinoPorBrinco(this.brincoSuino)
      .subscribe(
        suino => {
          this.suinoSelecionado = suino;
          this.suinoEncontrado = suino !== null;
          if (this.suinoEncontrado) {
            this.renderizarGrafico();
          }
        },
        error => {
          console.error("Erro ao buscar o suíno:", error);
          this.suinoEncontrado = false;
          this.suinoSelecionado = null;
        }
      );
  }

  renderizarGrafico() {
    if (!this.elemento) {
      console.error("Elemento não definido.");
      return;
    }

    const pesos = this.suinoSelecionado!.pesos.map(peso => peso.peso);
    const datas = this.suinoSelecionado!.pesos.map(peso => peso.dt_pesagem);

    new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        labels: datas,
        datasets: [
          {
            label: 'Peso',
            data: pesos,
            backgroundColor: 'orange',
            barThickness: 35
          }
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Evolução do Peso em relação ao tempo'
          }
        },
        elements: {
          bar: {
            borderRadius: 4
          }
        },
        responsive: true,
      },
    });
  }
}
