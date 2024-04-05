import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaksListComponent } from './components/taks-list/taks-list.component';

const routes: Routes = [{ path: '', component: TaksListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
