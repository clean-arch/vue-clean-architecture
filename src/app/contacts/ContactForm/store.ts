import { useLoader } from "@/shared/lib/composables/loader";
import { validInject } from "@/shared/lib/di";
import { reactive } from "vue";
import { useContactsStore } from "../store";
import type { ContactFormApiCreateProps, ContactFormApiPort } from "./ports";

export const CONTACT_FORM_API_PROVIDE_KEY = Symbol("ContactFormApi");

export function useContactFormStore() {
  const api = validInject<ContactFormApiPort>(
    CONTACT_FORM_API_PROVIDE_KEY,
    "ContactFormApiPort"
  );

  const contactsStore = useContactsStore();

  const loader = useLoader();
  async function create(data: ContactFormApiCreateProps) {
    const contact = await loader.wait(api.create(data));
    contactsStore.addContact(contact);
  }

  return reactive({
    loading: loader.loading,
    create,
  });
}
