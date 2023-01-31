import { useLoader } from "@/shared/lib/composables/loader";
import { defineInjectKey, validInject } from "@/shared/lib/di";
import { storeToRefs } from "pinia";
import { reactive } from "vue";
import { useListsStore } from "../store";
import type { ListsTableApiPort } from "./ports";

export const LISTS_TABLE_API_PROVIDE_KEY =
  defineInjectKey<ListsTableApiPort>("ListsTableApi");

export function useListsTableStore() {
  const api = validInject(LISTS_TABLE_API_PROVIDE_KEY);

  const listsStore = useListsStore();
  const { lists } = storeToRefs(listsStore);

  const loader = useLoader();
  async function fetchMany() {
    const lists = await loader.wait(api.fetchMany({}));
    listsStore.setLists(lists);
  }

  return reactive({
    loading: loader.loading,
    lists,
    fetchMany,
  });
}
