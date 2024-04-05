import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'size' })
export class FormatBytePipe implements PipeTransform {
  constructor() {}

  public transform(size: any, decimal: number): string {
    if (size === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimal < 0 ? 0 : decimal;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
