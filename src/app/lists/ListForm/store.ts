import { useLoader } from "@/shared/lib/composables/loader";
import { validInject } from "@/shared/lib/di";
import { reactive } from "vue";
import { useListsStore } from "../store";
import type { ListFormApiCreateProps, ListFormApiPort } from "./ports";

export const LIST_FORM_API_PROVIDE_KEY = Symbol("ListFormApi");

export function useListFormStore() {
  const api = validInject<ListFormApiPort>(
    LIST_FORM_API_PROVIDE_KEY,
    "ListFormApiPort"
  );

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
