import type { FileApiPort } from "@/app/files";
import type { AppFile } from "@/domain/entities/file";
import { delay } from "@/utils";
import { faker } from "@faker-js/faker";

let $instance: FileApiPort | undefined;

export class MockFileApi implements FileApiPort {
  #files: AppFile[];

  constructor() {
    this.#files = Array.from(new Array(20).keys()).map((_) => {
      const id = faker.datatype.uuid();
      const name = faker.system.fileName();
      const createdAt = faker.date.birthdate();
      return { id, name, createdAt };
    });
  }

  static getInstance() {
    if (!$instance) {
      $instance = new MockFileApi();
    }
    return $instance;
  }

  async fetchMany(): Promise<AppFile[]> {
    await delay(1000);
    return this.#files.concat();
  }
}
