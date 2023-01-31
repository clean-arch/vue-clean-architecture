import type { ContactFormApiPort } from "./ContactForm";
import type { ContactsTableApiPort } from "./ContactsTable";
export type { ContactFormApiCreateProps } from "./ContactForm";
export type { ContactsTableApiFetchManyProps } from "./ContactsTable";

export type ContactApiPort = ContactFormApiPort & ContactsTableApiPort;
