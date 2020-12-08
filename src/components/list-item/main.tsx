import ListItemProps from "./types";

import { getTaskPriorityString } from "../../utils";

export default function ListItem({
  data: { completeDate, description, priority },
}: ListItemProps) {
  return (
    <tr>
      <td>{completeDate !== undefined ? "yes" : "no"}</td>
      <td>{getTaskPriorityString(priority)}</td>
      <td>{description}</td>
    </tr>
  );
}
