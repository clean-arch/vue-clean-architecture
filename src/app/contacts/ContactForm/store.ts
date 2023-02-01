import { useLoader } from "@/shared/lib/composables/loader";
import { defineInjectKey, validInject } from "@/shared/lib/di";
import { defineStore } from "pinia";
import { useContactsStore } from "../store";
import type { ContactFormApiCreateProps, ContactFormApiPort } from "./ports";

export const CONTACT_FORM_API_PROVIDE_KEY =
  defineInjectKey<ContactFormApiPort>("ContactFormApi");

export const useContactFormStore = defineStore("ContactForm", () => {
  const api = validInject(CONTACT_FORM_API_PROVIDE_KEY);

  const contactsStore = useContactsStore();

  const loader = useLoader();
  async function create(data: ContactFormApiCreateProps) {
    const contact = await loader.wait(api.create(data));
    contactsStore.addContact(contact);
  }

  return {
    loading: loader.loading,
    create,
  };
});
