export interface ActionDialog {
  type: 'success' | 'error' | 'warning' | 'info';
  isList?: boolean;
  errors?: Error[]
  heading: string;
  text: string;
  actionButtonText?: string;
  applicationId?: any,
  applicationType?: any,
  currentStep?: number,
  emitType?: boolean
}
  export interface Error{
    fieldName: string;
message: string;
    sectionName: string;
    applicationStep: number

}
