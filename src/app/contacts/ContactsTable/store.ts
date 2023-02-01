import { useLoader } from "@/shared/lib/composables/loader";
import { defineInjectKey, validInject } from "@/shared/lib/di";
import { defineStore, storeToRefs } from "pinia";
import { reactive } from "vue";
import { useContactsStore } from "../store";
import type {
  ContactsTableApiFetchManyProps,
  ContactsTableApiPort,
} from "./ports";

export const CONTACTS_TABLE_API_PROVIDE_KEY =
  defineInjectKey<ContactsTableApiPort>("ContactsTableApi");

export const useContactsTableStore = defineStore("ContactsTable", () => {
  const api = validInject(CONTACTS_TABLE_API_PROVIDE_KEY);

  const contactsStore = useContactsStore();
  const { contacts } = storeToRefs(contactsStore);

  const loader = useLoader();
  async function fetchMany(query: ContactsTableApiFetchManyProps) {
    const contacts = await loader.wait(api.fetchMany(query));
    contactsStore.setContacts(contacts);
  }

  return {
    loading: loader.loading,
    contacts,
    fetchMany,
  };
});
