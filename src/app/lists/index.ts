import type { ListsTableApiPort } from "./ListsTable";
import type { ListsSelectApiPort } from "./ListsSelect";
import type { ListFormApiPort } from "./ListForm";
export type { ListFormApiCreateProps } from "./ListForm";

export type ListApiPort = ListsTableApiPort &
  ListsSelectApiPort &
  ListFormApiPort;
