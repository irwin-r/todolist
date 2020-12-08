import { TaskPriority } from "../constants";

export default function getTaskPriorityString(priority: TaskPriority): string {
  switch (priority) {
    case TaskPriority.HIGH:
      return "High";
    case TaskPriority.NORMAL:
      return "Normal";
    case TaskPriority.LOW:
      return "Low";
    default:
      throw new Error(`Unexpected priority type ${priority}`);
  }
}
