import { useLoader } from "@/shared/lib/composables/loader";
import { defineInjectKey, validInject } from "@/shared/lib/di";
import { computed, reactive } from "vue";
import { useListsStore } from "../store";
import type { ListsSelectApiPort } from "./ports";

export const LISTS_SELECT_API_PROVIDE_KEY =
  defineInjectKey<ListsSelectApiPort>("ListsTableApi");

export function useListsSelectStore() {
  const api = validInject(LISTS_SELECT_API_PROVIDE_KEY);

  const listsStore = useListsStore();

  const selectItems = computed(() =>
    listsStore.lists.map((l) => ({
      value: l.id,
      label: l.displayName,
    }))
  );

  const loader = useLoader();
  async function fetchMany() {
    const lists = await loader.wait(api.fetchMany({}));
    listsStore.setLists(lists);
  }

  return reactive({
    loading: loader.loading,
    selectItems,
    fetchMany,
  });
}
