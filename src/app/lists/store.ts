import { defineStore } from "pinia";
import { ref } from "vue";
import type { List } from "./domain";

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
