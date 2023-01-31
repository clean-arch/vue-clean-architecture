import type { Entity } from "../common/entity";

export interface AppFile extends Entity {
  name: string;
  createdAt: Date;
}
