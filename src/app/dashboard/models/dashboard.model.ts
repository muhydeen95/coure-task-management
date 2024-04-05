export interface UploadDocDTO {
  DocumentType: number;
  SubjectMatter: string;
  Files: Array<any>;
}

export interface DashboardResponseDTO {
  pending: number;
  ongoing: number;
  completed: number;
}

export const INITIAL_DASHBOARD_DATA = {
  pending: 0,
  ongoing: 0,
  completed: 0,
};


