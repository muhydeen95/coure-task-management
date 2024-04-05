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
import { TaskPriority, TaskStatus } from 'app/tasks/models/task.model';
import { SearchDTO } from 'app/models/response.model';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {
  public sub: Subscription = new Subscription();
  @ViewChild('close') close!: ElementRef;
  @Output() event: EventEmitter<{
    editObject: SearchDTO;
    isEditing?: boolean;
  }> = new EventEmitter<{ editObject: SearchDTO; isEditing?: boolean }>();
  @Output() isUploaded: EventEmitter<boolean> = new EventEmitter<boolean>();
  public filterForm!: UntypedFormGroup;
  public isLoading: boolean = false;
  public taskStatus = TaskStatus;
  public taskPriorities = TaskPriority;

  constructor(
    private fb: UntypedFormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel<SearchDTO>
  ) {}

  ngOnInit(): void {
    this.initUploadForm();
  }

  initUploadForm() {
    this.filterForm = this.fb.group({
      search: [this.data.editObject?.search ?? ''],
      priority: [this.data.editObject?.priority ?? null],
      status: [this.data.editObject?.status ?? null],
    });
  }

  public clear(): void {
    this.filterForm.reset();
    this.event.emit({
      isEditing: true,
      editObject: this.filterForm.value,
    });
    this.close.nativeElement.click();
  }

  public filter(): void {
    this.event.emit({
      isEditing: true,
      editObject: this.filterForm.value,
    });
    this.close.nativeElement.click();
  }

}
