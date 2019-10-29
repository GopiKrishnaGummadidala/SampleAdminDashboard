import { NgModule } from '@angular/core';
import { OrgChartModule } from 'ng2-org-chart';
import { MyOrgChartComponent } from './my-org-chart.component';

@NgModule({
    imports: [OrgChartModule],
    declarations: [MyOrgChartComponent],
    exports: [MyOrgChartComponent]
})
export class OrgChartComponentModule {}
