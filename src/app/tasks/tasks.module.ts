import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaksListComponent } from './components/taks-list/taks-list.component';
import { TakDialogComponent } from './dialogs/tak-dialog/tak-dialog.component';
import { TasksRoutingModule } from './tasks-routing.modue';
import { SharedModule } from '@shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaksListComponent,
    TakDialogComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TasksModule { }
