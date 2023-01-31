import type { BaseFetchManyApiPort } from "@/app/common/ports";
import type { List } from "@/domain/entities/list";

export type ListsTableApiPort = BaseFetchManyApiPort<List>;
