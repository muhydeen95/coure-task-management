import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { BaseComponent } from '@core/base/base/base.component';

@Directive({
  selector: '[fileUpload]',
})
export class FileUploadDirective {
  public allowedExtensions: string[] = ['jpg', 'jpeg', 'png', 'pdf'];
  constructor(private _base: BaseComponent) {}
  @Output() fileDetails = new EventEmitter<any>();

  // change listener
  @HostListener('change', ['$event']) public onChange(event: any) {
    event.preventDefault();
    event.stopPropagation();
    let file = event.target.files[0] ?? null;
    if (file !== null) {
      const limit = 100;
      const fileSizeInMb = file.size / (1024 * 1024);
      const typeArray = file.type.split('/');
      const fileExtension = typeArray[1];
      const validFileFormat = this.allowedExtensions.includes(
        fileExtension.toLowerCase()
      );
      if (fileSizeInMb < limit && validFileFormat) {
        if (file) {
          this.fileDetails.emit(file);
        }
      } else if (!validFileFormat) {
        this._base.openSnackBar(
          'File format is not supported. Select a valid file'
        );
      } else {
        this._base.openSnackBar(
          'File size is too large, maximum file size accepted is 100MB'
        );
      }
    }
  }
}
