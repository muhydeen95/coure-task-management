import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasKListComponent } from './components/task-list/task-list.component';

const routes: Routes = [{ path: '', component: TasKListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
