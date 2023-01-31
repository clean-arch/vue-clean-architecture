import type { BaseCreateApiPort } from "@/app/common/ports";
import type { List } from "@/domain/entities/list";

export interface ListFormApiCreateProps {
  displayName: string;
}

export type ListFormApiPort = BaseCreateApiPort<List, ListFormApiCreateProps>;
