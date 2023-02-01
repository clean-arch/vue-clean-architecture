import { useLoader } from "@/shared/lib/composables/loader";
import { defineInjectKey, validInject } from "@/shared/lib/di";
import { defineStore } from "pinia";
import { computed } from "vue";
import { useListsStore } from "../store";
import type { ListsSelectApiPort } from "./ports";

export const LISTS_SELECT_API_PROVIDE_KEY =
  defineInjectKey<ListsSelectApiPort>("ListsSelectApi");

export const useListsSelectStore = defineStore("ListsSelect", () => {
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

  return {
    loading: loader.loading,
    selectItems,
    fetchMany,
  };
});
