import { useLoader } from "@/shared/lib/composables/loader";
import { validInject } from "@/shared/lib/di";
import { storeToRefs } from "pinia";
import { reactive } from "vue";
import { useContactsStore } from "../store";
import type {
  ContactsTableApiFetchManyProps,
  ContactsTableApiPort,
} from "./ports";

export const CONTACTS_TABLE_API_PROVIDE_KEY = Symbol("ContactsTableApi");

export function useContactsTableStore() {
  const api = validInject<ContactsTableApiPort>(
    CONTACTS_TABLE_API_PROVIDE_KEY,
    "ContactsTableApiPort"
  );

  const contactsStore = useContactsStore();
  const { contacts } = storeToRefs(contactsStore);

  const loader = useLoader();
  async function fetchMany(query: ContactsTableApiFetchManyProps) {
    const contacts = await loader.wait(api.fetchMany(query));
    contactsStore.setContacts(contacts);
  }

  return reactive({
    loading: loader.loading,
    contacts,
    fetchMany,
  });
}
