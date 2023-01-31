import type { BaseCreateApiPort } from "@/shared/lib/ports";
import type { Contact } from "../domain";

export interface ContactFormApiCreateProps {
  email: string;
}

export type ContactFormApiPort = BaseCreateApiPort<
  Contact,
  ContactFormApiCreateProps
>;
