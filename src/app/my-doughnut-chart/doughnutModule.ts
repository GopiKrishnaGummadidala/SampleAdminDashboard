import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDoughnutChartComponent } from './my-doughnut-chart.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
    imports: [CommonModule, ChartsModule],
    declarations: [MyDoughnutChartComponent],
    exports: [MyDoughnutChartComponent]
})
export class DoughnutModule {}