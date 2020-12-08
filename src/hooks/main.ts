import { useCallback, useLayoutEffect, useState } from "react";

import { fetchTodoList, saveTodoList } from "../api";
import { TodoList } from "../model";
import { UseTodoListReturn } from "./types";

// eslint-disable-next-line import/prefer-default-export
export const useTodoList = (): UseTodoListReturn => {
  const [data, setData] = useState<TodoList | undefined>();
  const [error, setError] = useState<Error | undefined>();
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    setLoading(true);

    fetchTodoList()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const update = useCallback(async (list: TodoList) => {
    try {
      await saveTodoList(list);

      // update the local state once our request has successfully returned
      setData(list);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return {
    data,
    error,
    loading,
    update,
  };
};
