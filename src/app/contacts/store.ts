import type { Contact } from "@/domain/entities/contact";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useContactsStore = defineStore("contacts", () => {
  const data = ref([] as Contact[]);

  function setContacts(contacts: Contact[]): void {
    data.value = contacts;
  }

  function addContact(contact: Contact): void {
    data.value.unshift(contact);
  }

  return { contacts: data, setContacts, addContact };
});
