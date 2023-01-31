import type { Entity } from "@/domain/common/entity";

export interface BaseFetchManyApiPort<E extends Entity, P = unknown> {
  fetchMany(props: P): Promise<E[]>;
}

export interface BaseCreateApiPort<E extends Entity, P = unknown> {
  create(props: P): Promise<E>;
}
