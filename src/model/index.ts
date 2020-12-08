import { TaskPriority } from "../constants";

export interface TodoItem {
  completeDate?: Date;
  createDate: Date;
  deleteDate?: Date;
  description: string;
  priority: TaskPriority;
}

export type TodoList = TodoItem[];
