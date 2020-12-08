import localForage from "localforage";

import { LOCAL_STORAGE_KEY } from "../constants";
import { TodoList } from "../model";
import { sleep } from "../utils";

export async function fetchTodoList(): Promise<TodoList> {
  await sleep(500);

  return (await localForage.getItem(LOCAL_STORAGE_KEY)) ?? [];
}

export async function saveTodoList(list: TodoList): Promise<void> {
  await sleep(500);
  await localForage.setItem(LOCAL_STORAGE_KEY, list);
}
