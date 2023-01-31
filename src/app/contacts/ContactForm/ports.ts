import type { BaseCreateApiPort } from "@/app/common/ports";
import type { Contact } from "@/domain/entities/contact";

export interface ContactFormApiCreateProps {
  email: string;
}

export type ContactFormApiPort = BaseCreateApiPort<
  Contact,
  ContactFormApiCreateProps
>;
