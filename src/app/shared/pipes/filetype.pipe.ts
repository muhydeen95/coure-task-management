import { Pipe, PipeTransform } from '@angular/core';
import { FileTypeEnum } from '@shared/models/filetype.model';

@Pipe({ name: 'type' })
export class FileTypePipe implements PipeTransform {
  constructor() {}

  public transform(value: any, ...args: any[]): string {
    switch (value) {
      case FileTypeEnum.PDF:
        return 'assets/images/pdf.svg';
      case FileTypeEnum.DOC:
      case FileTypeEnum.DOCX:
      case FileTypeEnum.WORD:
        return 'assets/images/word.svg';
      case FileTypeEnum.PPT:
      case FileTypeEnum.PPTX:
        return 'assets/images/ppt.svg';
      case FileTypeEnum.EXCEL:
        return 'assets/images/excel.png';
      case FileTypeEnum.IMG:
        return 'assets/images/img.svg';
      default:
        return 'assets/images/img.svg';
    }
  }
}
