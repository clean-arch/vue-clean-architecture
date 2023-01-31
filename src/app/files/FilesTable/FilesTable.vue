<script setup lang="ts">
import { computed } from "vue";
import { useFilesTableStore } from "./store";
import { formatDate } from "@/utils";

const filesStore = useFilesTableStore();

const columns = computed(() => [
  { key: "name", title: "Название" },
  { key: "createdAt", title: "Дата создания" },
]);

filesStore.fetchMany();
</script>

<template>
  <BaseTable
    :loading="filesStore.loading"
    :columns="columns"
    :dataItems="filesStore.files"
  >
    <template #createdAt="{ dataItem }">
      {{ formatDate(dataItem.createdAt) }}
    </template>
  </BaseTable>
</template>
