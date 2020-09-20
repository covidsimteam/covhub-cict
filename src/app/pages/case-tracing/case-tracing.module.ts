import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NbUser } from '@nebular/auth';
import {
  NbActionsModule, NbButtonModule, NbCardModule,

  NbDatepickerModule,
  NbIconModule, NbInputModule, NbUserModule, NbWindowModule
} from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { ActiveTasksComponent } from './active-tasks/active-tasks.component';
import { CaseBannerComponent } from './case-banner/case-banner.component';
import { CaseTracingRoutingModule } from './case-tracing-routing.module';
import { CaseTracingComponent } from './case-tracing.component';
import { ContactTracingComponent } from './contact-tracing/contact-tracing.component';
import { NewCaseComponent } from './new-case/new-case.component';
import { CaseOverviewComponent } from './positives/case-overview/case-overview.component';
import { HorizontalNumbersComponent } from './positives/case-overview/horizontal-numbers/horizontal-numbers.component';
import { PositivesComponent } from './positives/positives.component';
import { TaskStatsPieComponent } from './task-stats-pie/task-stats-pie.component';


@NgModule({
  declarations: [
    ActiveTasksComponent,
    ContactTracingComponent,
    CaseTracingComponent,
    CaseBannerComponent,
    NewCaseComponent,
    TaskStatsPieComponent,
    PositivesComponent,
    CaseOverviewComponent,
    HorizontalNumbersComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild({ extend: true }),

    NbCardModule,
    NbInputModule,
    NbDatepickerModule,
    NbUserModule,
    NbWindowModule.forChild({
      closeOnBackdropClick: false,
      closeOnEsc: true
    }),

    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatExpansionModule,

    CaseTracingRoutingModule,

    NgxChartsModule,
    NbIconModule,
    NbButtonModule,
    NbActionsModule,

    ChartModule
  ]
})
export class CaseTracingModule { }
