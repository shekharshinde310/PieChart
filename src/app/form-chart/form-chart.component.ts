import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-form-chart',
  templateUrl: './form-chart.component.html',
  styleUrls: ['./form-chart.component.css']
})

export class FormChartComponent {

  pieChartForm!: FormGroup;

  ctx: any;
  config: any;
  chartData: number[] = [];
  chartDatalabels: any[] = [];
  myChart: any;

  ngOnInit() {
    this.pieChartForm = new FormGroup({
      one: new FormControl(null, Validators.required),
      two: new FormControl(null, Validators.required)
    })



    this.ctx = document.getElementById('myChart');

    this.config = {
      type: "pie",
      options: {
      },
      data: {
        labels: this.chartDatalabels,
        datasets: [{
          label: 'chart data',
          data: this.chartData,
        }]
      }
    }

    this.chartDatalabels.push('box 1');
    this.chartDatalabels.push('box 2');


  }

  createChart() {
    console.log(this.pieChartForm);
    let data1 = this.pieChartForm.value.one;
    let data2 = this.pieChartForm.value.two;
    let total = 100;

    if (data1 && !data2) {
      data2 = total - data1;
      this.pieChartForm.patchValue({
        two: total - data1
      })
    } else if (data2 && !data1) {
      data1 = total - data2;
      this.pieChartForm.patchValue({
        one: total - data2
      })
    } else if (data1 + data2 < total) {
      throw alert('please enter valid range >> sum of two numbers should be 100')
    } else if (data1 + data2 > total) {
      throw alert('please add valid range >> sum of two numbers should be 100');
    }

    this.chartData.push(data1);
    this.chartData.push(data2);
    
    const myChart = new Chart(this.ctx, this.config);

  }
}
