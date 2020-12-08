import { ListProps } from "./types";
import { ListItem } from "../list-item";

export default function List({ data }: ListProps): JSX.Element {
  console.log(data);
  return (
    <table className="w-full table-fixed">
      <thead>
        <tr>
          <th className="w-1/4">Completed</th>
          <th className="w-1/4">Priority</th>
          <th className="w-2/4">Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <ListItem data={item} />
        ))}
      </tbody>
    </table>
  );
}
