export enum TaskState {
  NotStarted = 'Not Started',
  InProgress = 'In Progress',
  InReview = 'In Review',
  Done = 'Done',
}

export enum TaskPriority {
  VeryLow = 'Very Low',
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  VeryHigh = 'Very High',
}

export interface Task {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  dueDate: string;
  group: string;
  state: TaskState;
  milestone: string;
  priority: TaskPriority;
  owner: string;
  assignedUsers: string[];
  keywords: string[];
  attachments: string[];
  hoursOfWork: number;
  history: { date: string; change: string }[];
  comments: { id: string; user: string; text: string; date: string }[];
}