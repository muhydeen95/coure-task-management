import {
  INITIAL_DASHBOARD_DATA,
} from './../../models/dashboard.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  DashboardResponseDTO,
} from 'app/dashboard/models/dashboard.model';
import { FilterDialogComponent } from '@shared/dialogs/filter-dialog/filter-dialog.component';
import { DialogModel } from '@shared/components/models/dialog.model';
import { TaskDialogComponent } from 'app/tasks/dialogs/task-dialog/task-dialog.component';
import { TASKPRIORITYENUM, TASKSTATUSENUM, Task } from 'app/tasks/models/task.model';
import { CurrentUserService } from '@core/services/current-user.service';
import { InitialSearchDTO, SearchDTO } from 'app/models/response.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public tasks: Task[] = [];
  public filteredTasks: Task[] = [];
  public dashboardMetrics: DashboardResponseDTO = INITIAL_DASHBOARD_DATA;
  public taskStatusEnum = TASKSTATUSENUM;
  public taskPriorityEnum = TASKPRIORITYENUM;
  public is_initial: boolean = true;
  public newId: number = 0;
  public searchQuery: SearchDTO = { ...InitialSearchDTO, search: '' };
  
  constructor(
    public dialog: MatDialog,
    private _current: CurrentUserService
  ) {}

  ngOnInit() {
    this.tasks = this.filteredTasks = this._current.getTasks();
    this.filterTaskByStatus();
    this.generateId();
  }

  public generateId()  {
    const lastItem = this.tasks[this.tasks.length - 1];
    (this.tasks.length > 0) 
      ? this.newId = lastItem.id + 1
      : this.newId = 1;
  }

  filterTaskByStatus() {
    const pending: any[] = this.tasks.filter((task: Task) => {
      return task.status === this.taskStatusEnum.PENDING;
    });
    const ongoing: any[] = this.tasks.filter((task: Task) => {
      return task.status === this.taskStatusEnum.ONGOING;
    });
    const completed: any[] = this.tasks.filter((task: Task) => {
      return task.status === this.taskStatusEnum.COMPLETED;
    });
    this.dashboardMetrics = {
      pending: pending.length,
      ongoing: ongoing.length,
      completed: completed.length,
    };
  }

  public openFilterDialog(
    payload: { isEditing?: boolean; editObject?: any } | any
  ): void {
    let object: DialogModel<any> = payload;
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      panelClass: 'modal-width',
      data: object,
    });
    dialogRef.componentInstance.event.subscribe((event: DialogModel<any>) => {
      this.searchQuery = event.editObject;
      this.filterTask(event.editObject)
    });
  }

  public filterTask(payload: SearchDTO) {
    this.is_initial = false;
    if(payload.priority && payload.status) {
      this.filteredTasks = this.tasks.filter((t: Task) => {
        return (t.priority === payload.priority) && (t.status === payload.status);
      });
    } else if(payload.priority) {
      this.filteredTasks = this.tasks.filter((t: Task) => {
        return t.priority === payload.priority;
      });
    } else if(payload.status) {
      this.filteredTasks = this.tasks.filter((t: Task) => {
        return t.status === payload.status;
      });
    } else {
      this.filteredTasks = this.tasks;
    }
  }

  getSearchQuery(query: string) {
    this.searchQuery.search = query;
  }

  searchTask() {
    this.is_initial = false;
    if(this.searchQuery.search) {
      this.filteredTasks = this.tasks.filter(task => {
        return (task.title).toLowerCase().trim() === (this.searchQuery.search).toLowerCase().trim()
      });
    } else {
      this.filteredTasks= this.tasks;
    }
  }

  public openDialog(
    payload: { isEditing?: boolean; editObject?: Task } | any
  ): void {
    let object: DialogModel<Task> = payload;
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      data: object,
    });
    dialogRef.componentInstance.event.subscribe((event: DialogModel<Task>) => {
      if (event?.isEditing) {
        const index = this.tasks.findIndex((task: Task) => {
          return task.id == event?.editObject?.id;
        });
        this.tasks[index] = event?.editObject;
      } else {
        this.tasks = this.filteredTasks = [event?.editObject, ...this.tasks];
      }
      this._current.storeTasks(this.tasks);
    });
  }

  deleteTask(id: number) {
    this.filteredTasks = this.tasks.filter(obj => obj.id !== id);
    this.tasks = this.filteredTasks;
    this._current.storeTasks(this.tasks);
  }

}
