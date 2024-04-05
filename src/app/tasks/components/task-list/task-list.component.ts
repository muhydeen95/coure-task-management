import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CurrentUserService } from '@core/services/current-user.service';
import { DialogModel } from '@shared/components/models/dialog.model';
import { FilterDialogComponent } from '@shared/dialogs/filter-dialog/filter-dialog.component';
import { InitialSearchDTO, SearchDTO } from 'app/models/response.model';
import { TaskDialogComponent } from 'app/tasks/dialogs/task-dialog/task-dialog.component';
import { TASKPRIORITYENUM, TASKSTATUSENUM, Task } from 'app/tasks/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TasKListComponent implements OnInit {
  public tasks: Task[] = []; 
  public filteredTasks: Task[] = []; 
  public taskStatusEnum = TASKSTATUSENUM;
  public taskPriorityEnum = TASKPRIORITYENUM;
  public is_initial: boolean = true;
  public newId: number = 0;
  public searchQuery: SearchDTO = { ...InitialSearchDTO, search: '' };

  constructor(
    private dialog: MatDialog,
    private _current: CurrentUserService
  ) { }

  ngOnInit(): void {
    this.tasks = this.filteredTasks = this._current.getTasks();
    this.generateId();
  }

  public generateId()  {
    const lastItem = this.tasks[this.tasks.length - 1];
    (this.tasks.length > 0) 
      ? this.newId = lastItem.id + 1
      : this.newId = 1;
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

}
