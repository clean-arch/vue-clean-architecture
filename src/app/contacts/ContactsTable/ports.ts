import type { EntityId } from "@/shared/lib/entity";
import type { BaseFetchManyApiPort } from "@/shared/lib/ports";
import type { Contact } from "../domain";

export interface ContactsTableApiFetchManyProps {
  listId?: EntityId;
}

export type ContactsTableApiPort = BaseFetchManyApiPort<
  Contact,
  ContactsTableApiFetchManyProps
>;
