import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasKListComponent } from './components/task-list/task-list.component';
import { TaskDialogComponent } from './dialogs/task-dialog/task-dialog.component';
import { TasksRoutingModule } from './tasks-routing.modue';
import { SharedModule } from '@shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    TasKListComponent,
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule
  ]
})
export class TasksModule { }
