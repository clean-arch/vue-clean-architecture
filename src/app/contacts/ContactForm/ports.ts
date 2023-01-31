import type { Contact } from "@/domain/entities/contact";
import type { BaseCreateApiPort } from "@/shared/lib/ports";

export interface ContactFormApiCreateProps {
  email: string;
}

export type ContactFormApiPort = BaseCreateApiPort<
  Contact,
  ContactFormApiCreateProps
>;
