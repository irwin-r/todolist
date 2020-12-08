import { TodoList } from "../model";

export interface UseTodoListReturn {
  data: TodoList | undefined;
  loading: boolean;
  error: Error | undefined;
  update: (list: TodoList) => Promise<void>;
}
