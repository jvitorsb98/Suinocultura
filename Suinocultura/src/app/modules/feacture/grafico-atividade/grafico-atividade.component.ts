import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Suino } from '../../shared/model/suino';

@Component({
  selector: 'app-grafico-atividade',
  templateUrl: './grafico-atividade.component.html',
  styleUrls: ['./grafico-atividade.component.css']
})
export class GraficoAtividadeComponent implements OnInit {
  @ViewChild("meuCanvas", { static: true }) elemento!: ElementRef;
  
  @Input() selectedSuino: Suino | undefined;
  @Input() historico: any[] = [];

  chart!: Chart;
  atividades: any[] = [];
  contagemAtividades: { [key: string]: number } = {};

  ngOnInit() {
    this.historico.forEach((atividade) => {
      if (atividade.descricao !== 'Pesagem') {
        this.atividades.push(atividade);
      }
    });

    this.atividades.forEach(atividade => {
      const id = atividade.id;
      this.contagemAtividades[id] = this.contagemAtividades[id] ? this.contagemAtividades[id] + 1 : 1;
    });

    if (this.chart) {
      this.chart.destroy();
    }

    this.delay(1000).then(() => {
      Chart.register(...registerables);

      this.atividades = this.atividades.filter((item, index, self) =>
        index === self.findIndex((t) => (
          t.id === item.id
        ))
      );

      this.atividades.sort((a, b) => a.descricao.localeCompare(b.descricao));

      const labelsSuino = this.atividades.map(item => item.descricao);
      const dataSuino = this.atividades.map(item => this.contagemAtividades[item.id]);

      this.chart = new Chart(this.elemento.nativeElement, {
        type: 'bar',
        data: {
          labels: labelsSuino,
          datasets: [
            {
              label: "Qtde de Aplicações",
              data: dataSuino
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 0.5
              }
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Histórico de Atividades'
            }
          }
        }
      });
    });
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
