import type { BaseCreateApiPort } from "@/shared/lib/ports";
import type { List } from "../domain";

export interface ListFormApiCreateProps {
  displayName: string;
}

export type ListFormApiPort = BaseCreateApiPort<List, ListFormApiCreateProps>;
