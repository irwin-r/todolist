import React, { useCallback } from "react";
import Header from "../header";
import ListContainer from "../list-container";
import { useTodoList } from "../../hooks";
import { TaskPriority } from "../../constants";

function App(): JSX.Element {
  const { data, error, loading, update } = useTodoList();

  const onAdd = useCallback(
    async (description: string) => {
      const task = {
        completed: false,
        createDate: new Date(),
        description,
        priority: TaskPriority.NORMAL,
      };

      await update([...(data ?? []), task]);
    },
    [data, update]
  );

  return (
    <div className="container mx-auto">
      <Header disabled={loading} onAdd={onAdd} />
      <ListContainer data={data} error={error} loading={loading} />
    </div>
  );
}

export default App;
