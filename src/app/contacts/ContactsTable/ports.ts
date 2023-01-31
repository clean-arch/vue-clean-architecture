import type { BaseFetchManyApiPort } from "@/app/common/ports";
import type { EntityId } from "@/domain/common/entity";
import type { Contact } from "@/domain/entities/contact";

export interface ContactsTableApiFetchManyProps {
  listId?: EntityId;
}

export type ContactsTableApiPort = BaseFetchManyApiPort<
  Contact,
  ContactsTableApiFetchManyProps
>;
