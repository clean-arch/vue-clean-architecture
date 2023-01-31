import type { Entity } from "@/shared/lib/entity";

export interface Contact extends Entity {
  email: string;
  createdAt: Date;
}
