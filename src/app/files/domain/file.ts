import type { Entity } from "@/shared/lib/entity";

export interface AppFile extends Entity {
  name: string;
  createdAt: Date;
}
