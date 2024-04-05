import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogModel } from '@shared/components/models/dialog.model';
import { Subscription } from 'rxjs';
import { Task, TaskPriority, TaskStatus } from 'app/tasks/models/task.model';
import { UtilityService } from '@shared/services/utility.service';

@Component({
  selector: 'app-tak-dialog',
  templateUrl: './tak-dialog.component.html',
  styleUrls: ['./tak-dialog.component.scss']
})
export class TakDialogComponent implements OnInit {
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
  ) {}

  ngOnInit(): void {
    this.initUploadForm();
  }

  initUploadForm() {
    this.taskForm = this.fb.group({
      id: [ this.data.editObject?.id],
      title: [this.data.editObject?.title ?? ''],
      description: [this.data.editObject?.description ?? ''],
      dueDate: [this.data.isEditing ? this._util.formatDate(this.data.editObject?.dueDate) : null],
      status: [this.data.editObject?.status ?? null],
      priority: [this.data.editObject?.priority ?? null],
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
      this.close.nativeElement.click();
    }
  }

}
