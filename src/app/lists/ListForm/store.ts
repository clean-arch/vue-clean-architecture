import { useLoader } from "@/shared/lib/composables/loader";
import { defineInjectKey, validInject } from "@/shared/lib/di";
import { reactive } from "vue";
import { useListsStore } from "../store";
import type { ListFormApiCreateProps, ListFormApiPort } from "./ports";

export const LIST_FORM_API_PROVIDE_KEY =
  defineInjectKey<ListFormApiPort>("ListFormApi");

export function useListFormStore() {
  const api = validInject(LIST_FORM_API_PROVIDE_KEY);

  const listsStore = useListsStore();

  const loader = useLoader();
  async function create(data: ListFormApiCreateProps) {
    const list = await loader.wait(api.create(data));
    listsStore.addList(list);
  }

  return reactive({
    loading: loader.loading,
    create,
  });
}
