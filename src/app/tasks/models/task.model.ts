export interface Task {
    id: number,
    title: string,
    description: string,
    dueDate: string,
    priority: number,
    status: number,
}

export const TaskStatus: { id: number; type: string }[] = [
    {
      id: 1,
      type: 'Pending',
    },
    {
      id: 2,
      type: 'Ongoing',
    },
    {
      id: 3,
      type: 'Completed',
    }
];

export const TaskPriority: { id: number; type: string }[] = [
    {
      id: 1,
      type: 'Urgent',
    },
    {
      id: 2,
      type: 'High',
    },
    {
      id: 3,
      type: 'Normal',
    },
    {
      id: 4,
      type: 'Low',
    }
];

export enum TASKSTATUSENUM {
    ONGOING = 1,
    PENDING = 2,
    COMPLETED = 3,
}
  
export enum TASKPRIORITYENUM {
    URGENT = 1,
    HIGH = 2,
    NORMAL = 3,
    LOW = 4,
}