import type { BaseFetchManyApiPort } from "@/shared/lib/ports";
import type { List } from "../domain";

export type ListsSelectApiPort = BaseFetchManyApiPort<List>;
