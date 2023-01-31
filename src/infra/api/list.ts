import type { ListApiPort, ListFormApiCreateProps } from "@/app/lists";
import type { List } from "@/app/lists/domain";
import { delay } from "@/shared/lib/utils/promise";
import { faker } from "@faker-js/faker";

let $instance: ListApiPort | undefined;

export class MockListApi implements ListApiPort {
  #lists: List[];

  constructor() {
    this.#lists = Array.from(new Array(20).keys()).map((_) => {
      const id = faker.datatype.uuid();
      const displayName = faker.commerce.productName();
      return { id, displayName };
    });
  }

  static getInstance() {
    if (!$instance) {
      $instance = new MockListApi();
    }
    return $instance;
  }

  async create(createListData: ListFormApiCreateProps): Promise<List> {
    const list: List = {
      id: faker.datatype.uuid(),
      ...createListData,
    };

    this.#lists.unshift(list);
    await delay(1000);
    return list;
  }

  async fetchMany(): Promise<List[]> {
    await delay(1000);
    return this.#lists.concat();
  }
}
