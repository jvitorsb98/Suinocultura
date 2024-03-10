import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { SuinoPesos } from '../../model/suino'


const SUINOS: SuinoPesos[] = [
  { peso: 55, dt_pesagem: '2020-06-05', brinco_suino: "1" },
  { peso: 60, dt_pesagem: '2020-07-05', brinco_suino: "1" },
  { peso: 65, dt_pesagem: '2020-08-05', brinco_suino: "1" },
  { peso: 70, dt_pesagem: '2020-09-05', brinco_suino: "1" },
  { peso: 68, dt_pesagem: '2020-10-05', brinco_suino: "1" },
  { peso: 72, dt_pesagem: '2020-11-05', brinco_suino: "1" },
  { peso: 80, dt_pesagem: '2020-12-05', brinco_suino: "1" },
  { peso: 78, dt_pesagem: '2021-01-05', brinco_suino: "1" },
  { peso: 85, dt_pesagem: '2021-02-05', brinco_suino: "1" },
  { peso: 82, dt_pesagem: '2021-03-05', brinco_suino: "1" },


  { peso: 55, dt_pesagem: '2020-06-05', brinco_suino: "2" },
  { peso: 60, dt_pesagem: '2020-07-05', brinco_suino: "2" },
  { peso: 65, dt_pesagem: '2020-08-05', brinco_suino: "2" },
  { peso: 70, dt_pesagem: '2020-09-05', brinco_suino: "2" },
  { peso: 68, dt_pesagem: '2020-10-05', brinco_suino: "2" },
  { peso: 72, dt_pesagem: '2020-11-05', brinco_suino: "2" },
  { peso: 80, dt_pesagem: '2020-12-05', brinco_suino: "2" },
  { peso: 78, dt_pesagem: '2021-01-05', brinco_suino: "2" },
  { peso: 85, dt_pesagem: '2021-02-05', brinco_suino: "2" },
  { peso: 82, dt_pesagem: '2021-03-05', brinco_suino: "2" },


  { peso: 55, dt_pesagem: '2020-06-05', brinco_suino: "3" },
  { peso: 60, dt_pesagem: '2020-07-05', brinco_suino: "3" },
  { peso: 65, dt_pesagem: '2020-08-05', brinco_suino: "3" },
  { peso: 70, dt_pesagem: '2020-09-05', brinco_suino: "3" },
  { peso: 68, dt_pesagem: '2020-10-05', brinco_suino: "3" },
  { peso: 72, dt_pesagem: '2020-11-05', brinco_suino: "3" },
  { peso: 80, dt_pesagem: '2020-12-05', brinco_suino: "3" },
  { peso: 78, dt_pesagem: '2021-01-05', brinco_suino: "3" },
  { peso: 85, dt_pesagem: '2021-02-05', brinco_suino: "3" },
  { peso: 82, dt_pesagem: '2021-03-05', brinco_suino: "3" },
];

@Component({
  selector: 'app-pesagem-suinos',
  templateUrl: './pesagem-suinos.component.html',
  styleUrls: ['./pesagem-suinos.component.css']
})
export class PesagemSuinosComponent implements AfterViewInit {
  @ViewChild("graficoSuinos") elemento!: ElementRef;
  
  brincoSuino: string = "";
  suinoEncontrado: boolean = false;
  suinoSelecionado: SuinoPesos[] = [];

  ngAfterViewInit() {
    this.renderizarGrafico();
  }

  buscarSuino() {
    this.suinoSelecionado = SUINOS.filter(suino => suino.brinco_suino === this.brincoSuino);
    this.suinoEncontrado = this.suinoSelecionado.length > 0;
  }


  renderizarGrafico() {
    if (!this.elemento) {
      console.error("Elemento não definido.");
      return;
    }
  
    const pesos = this.suinoSelecionado.map(suino => suino.peso);
    const datas = this.suinoSelecionado.map(suino => suino.dt_pesagem);

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
