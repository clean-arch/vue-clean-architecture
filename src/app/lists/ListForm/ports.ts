import type { List } from "@/domain/entities/list";
import type { BaseCreateApiPort } from "@/shared/lib/ports";

export interface ListFormApiCreateProps {
  displayName: string;
}

export type ListFormApiPort = BaseCreateApiPort<List, ListFormApiCreateProps>;
