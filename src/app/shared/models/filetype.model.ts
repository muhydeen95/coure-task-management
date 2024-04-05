export enum FileTypeEnum {
  PDF = 'pdf',
  GIF = 'gif',
  PNG = 'png',
  JPG = 'jpg',
  JPEG = 'jpeg',
  IMG = 'img',
  DOC = 'doc',
  DOCX = 'docx',
  WORD ='word',
  PPT = 'ppt',
  PPTX = 'pptx',
  EXCEL = 'xlsx',
  XLS = 'xls',
  EXCEL2 = "xlsx",
}


export interface ApplicationDocumentDTO {
  applicationDocumentId: number,
  applicationDocumentTypeId: number,
  applicationId: number,
  createdAt: string,
  documentName: string,
  documentPath: string,
  isApplicationDeclaration: boolean,
  isDocumentNew: boolean
}
