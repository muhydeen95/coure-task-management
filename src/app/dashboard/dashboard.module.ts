import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuickActionsCardsComponent } from './components/quick-actions-cards/quick-actions-cards.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    DashboardComponent,
    QuickActionsCardsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDialogModule,
    SharedModule,
    ReactiveFormsModule,
    MatTooltipModule
  ],
})
export class DashboardModule {}
