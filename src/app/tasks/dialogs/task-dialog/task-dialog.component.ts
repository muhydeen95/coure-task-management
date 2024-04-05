import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogModel } from '@shared/components/models/dialog.model';
import { Subscription } from 'rxjs';
import { Task, TaskPriority, TaskStatus } from 'app/tasks/models/task.model';
import { UtilityService } from '@shared/services/utility.service';
import { BaseComponent } from '@core/base/base/base.component';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {
  public sub: Subscription = new Subscription();
  @ViewChild('close') close!: ElementRef;
  @Output() event: EventEmitter<{
    editObject: Task;
    isEditing?: boolean;
  }> = new EventEmitter<{ editObject: Task; isEditing?: boolean }>();
  @Output() isUploaded: EventEmitter<boolean> = new EventEmitter<boolean>();
  public taskForm!: UntypedFormGroup;
  public taskFormSubmitted!: boolean;
  public isLoading: boolean = false;
  public taskStatus = TaskStatus;
  public taskPriorities = TaskPriority;

  constructor(
    private fb: UntypedFormBuilder,
    private _util: UtilityService,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel<Task>,
    private _base: BaseComponent
  ) {}

  ngOnInit(): void {
    this.initUploadForm();
  }

  initUploadForm() {
    this.taskForm = this.fb.group({
      id: [ this.data.editObject?.id, Validators.required],
      title: [this.data.editObject?.title ?? '', Validators.required],
      description: [this.data.editObject?.description ?? '', Validators.required],
      dueDate: [this.data.isEditing ? this._util.formatDate(this.data.editObject?.dueDate) : null, Validators.required],
      status: [this.data.editObject?.status ?? null, Validators.required],
      priority: [this.data.editObject?.priority ?? null, Validators.required],
    });
  }

  public submit(): void {
    this.taskFormSubmitted = true;
    if(this.taskForm.valid) {
      const payload = this.taskForm.value;
      payload.dueDate = new Date(payload.dueDate).toISOString();
      this.event.emit({
        isEditing: this.data.isEditing,
        editObject: payload,
      });
      this._base.openSnackBar(`${this.data.isEditing ? 'Task updated successfully' : 'Task created successfully'}`, 'success')
      this.close.nativeElement.click();
    } else {
      this._base.openSnackBar('Kindly fill all required field', 'error');
    }
  }

}
