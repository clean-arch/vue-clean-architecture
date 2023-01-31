<script setup lang="ts">
import { computed, watch } from "vue";
import { formatDate } from "@/shared/lib/utils/date";
import { useContactsTableStore } from "./store";

const columns = computed(() => [
  { key: "email", title: "Email" },
  //{ key: "openedEmailCount", title: "Открыто" },
  //{ key: "sentEmailCount", title: "Отправлено" },
  { key: "createdAt", title: "Добавлен" },
]);

const store = useContactsTableStore();

const props = defineProps({
  listId: { type: String, default: "" },
});

watch(
  () => props.listId,
  (listId, prevListId) => {
    if (listId === undefined || listId === prevListId) return;
    return store.fetchMany({ listId: listId ? listId : undefined });
  },
  { immediate: true }
);
</script>

<template>
  <BaseTable
    :loading="store.loading"
    :columns="columns"
    :dataItems="store.contacts"
  >
    <template #openedEmailCount="{ dataItem }">
      {{ dataItem.openedEmailCount }}
      ({{ dataItem.openedEmailPercent.toFixed(2) }}%)
    </template>
    <template #createdAt="{ dataItem }">
      {{ formatDate(dataItem.createdAt) }}
    </template>
  </BaseTable>
</template>
