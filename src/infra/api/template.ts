import type { TemplateApiPort } from "@/app_core/ports/template";
import { delay } from "@/utils";
import { faker } from "@faker-js/faker";
import type { Template } from "../domain/template";

export class MockTemplateApi implements TemplateApiPort {
  #templates: Template[];

  constructor() {
    this.#templates = Array.from(new Array(20).keys()).map((_) => {
      const id = faker.datatype.uuid();
      const displayName = faker.lorem.words(3);
      const createdAt = faker.date.birthdate();
      return { id, displayName, createdAt };
    });
  }

  async fetchMany(): Promise<Template[]> {
    await delay(1000);
    return this.#templates.concat();
  }
}
