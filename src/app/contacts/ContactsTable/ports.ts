import type { Contact } from "@/domain/entities/contact";
import type { EntityId } from "@/shared/lib/entity";
import type { BaseFetchManyApiPort } from "@/shared/lib/ports";

export interface ContactsTableApiFetchManyProps {
  listId?: EntityId;
}

export type ContactsTableApiPort = BaseFetchManyApiPort<
  Contact,
  ContactsTableApiFetchManyProps
>;
