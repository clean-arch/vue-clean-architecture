import type { List } from "@/domain/entities/list";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useListsStore = defineStore("lists", () => {
  const data = ref([] as List[]);

  function setLists(lists: List[]): void {
    data.value = lists;
  }

  function addList(list: List): void {
    data.value.unshift(list);
  }

  return { lists: data, setLists, addList };
});
