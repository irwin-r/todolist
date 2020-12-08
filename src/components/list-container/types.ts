import { TodoList } from "../../model";

export interface ListContainerProps {
  data: TodoList | undefined;
  error: Error | undefined;
  loading: boolean;
}
