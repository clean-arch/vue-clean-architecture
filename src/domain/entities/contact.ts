import type { Entity } from "../common/entity";

export interface Contact extends Entity {
  email: string;
  createdAt: Date;
}
