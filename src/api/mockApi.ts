import { Task, TaskState, TaskPriority } from '../types/task';

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Implement login screen',
    description: 'Create a responsive login screen with email and password fields',
    creationDate: '2023-11-01',
    dueDate: '2023-11-15',
    group: 'Frontend',
    state: TaskState.InProgress,
    milestone: 'MVP',
    priority: TaskPriority.High,
    owner: 'john@example.com',
    assignedUsers: ['jane@example.com', 'bob@example.com'],
    keywords: ['UI', 'authentication'],
    attachments: [],
    hoursOfWork: 8,
    history: [
      { date: '2023-11-01', change: 'Task created' },
      { date: '2023-11-05', change: 'Started implementation' },
    ],
    comments: [
      { id: '1', user: 'jane@example.com', text: 'Let me know if you need any help with the design', date: '2023-11-02' },
    ],
  },
  {
    id: '2',
    title: 'Set up CI/CD pipeline',
    description: 'Configure GitHub Actions for continuous integration and deployment',
    creationDate: '2023-11-02',
    dueDate: '2023-11-20',
    group: 'DevOps',
    state: TaskState.NotStarted,
    milestone: 'Infrastructure',
    priority: TaskPriority.Medium,
    owner: 'alice@example.com',
    assignedUsers: ['bob@example.com'],
    keywords: ['CI/CD', 'automation'],
    attachments: [],
    hoursOfWork: 16,
    history: [
      { date: '2023-11-02', change: 'Task created' },
    ],
    comments: [],
  },
  // Add more mock tasks here
];

export const fetchTasks = (): Promise<Task[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockTasks), 500);
  });
};

export const fetchTaskById = (id: string): Promise<Task | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockTasks.find(task => task.id === id)), 300);
  });
};

export const createTask = (task: Omit<Task, 'id'>): Promise<Task> => {
  return new Promise((resolve) => {
    const newTask = { ...task, id: String(mockTasks.length + 1) };
    mockTasks.push(newTask);
    setTimeout(() => resolve(newTask), 300);
  });
};

export const updateTask = (task: Task): Promise<Task> => {
  return new Promise((resolve) => {
    const index = mockTasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      mockTasks[index] = task;
    }
    setTimeout(() => resolve(task), 300);
  });
};

export const deleteTask = (id: string): Promise<void> => {
  return new Promise((resolve) => {
    const index = mockTasks.findIndex(t => t.id === id);
    if (index !== -1) {
      mockTasks.splice(index, 1);
    }
    setTimeout(resolve, 300);
  });
};