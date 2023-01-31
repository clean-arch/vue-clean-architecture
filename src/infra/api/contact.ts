import type {
  ContactApiPort,
  ContactFormApiCreateProps,
  ContactsTableApiFetchManyProps,
} from "@/app/contacts";
import type { EntityId } from "@/domain/common/entity";
import type { Contact } from "@/domain/entities/contact";
import { delay } from "@/shared/lib/utils/promise";
import { faker } from "@faker-js/faker";

let $instance: MockContactApi | undefined;

export class MockContactApi implements ContactApiPort {
  #contactsByListId: Map<EntityId, Contact[]>;

  constructor() {
    this.#contactsByListId = new Map();
  }

  static getInstance() {
    if (!$instance) {
      $instance = new MockContactApi();
    }
    return $instance;
  }

  async create(data: ContactFormApiCreateProps): Promise<Contact> {
    const contact: Contact = {
      ...data,
      id: faker.internet.email().toLowerCase(),
      createdAt: faker.date.birthdate(),
    };
    this.#getContacts().unshift(contact);
    await delay(1000);
    return contact;
  }

  async fetchMany({
    listId,
  }: ContactsTableApiFetchManyProps): Promise<Contact[]> {
    const contacts = this.#getContacts(listId);
    await delay(1000);
    return contacts.concat();
  }

  #getContacts(listId?: EntityId): Contact[] {
    const key = listId ?? "";
    let contacts = this.#contactsByListId.get(key);
    if (contacts == null) {
      contacts = genMockContacts();
      this.#contactsByListId.set(key, contacts);
    }
    return contacts;
  }
}

function genMockContacts() {
  return Array.from(new Array(20).keys()).map((_): Contact => {
    const id = faker.datatype.uuid();
    const email = faker.internet.email().toLowerCase();
    const openedEmailCount = Number(faker.random.numeric());
    const sentEmailCount = Number(faker.random.numeric(2));
    const openedEmailPercent = (openedEmailCount / sentEmailCount) * 100;
    const createdAt = faker.date.birthdate();
    return {
      id,
      email,
      createdAt,
      /*
      openedEmailCount,
      openedEmailPercent,
      sentEmailCount,
      */
    };
  });
}
