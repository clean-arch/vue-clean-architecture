<script setup lang="ts">
import { computed } from "vue";
import { useListsTableStore } from "./store";

const store = useListsTableStore();

const columns = computed(() => [{ key: "displayName", title: "Название" }]);

store.fetchMany();
</script>

<template>
  <BaseTable
    :loading="store.loading"
    :columns="columns"
    :dataItems="store.lists"
  >
    <template #displayName="{ dataItem }">
      <RouterLink
        :to="{ name: 'audience_contacts', params: { listId: dataItem.id } }"
      >
        {{ dataItem.displayName }}
      </RouterLink>
    </template>
  </BaseTable>
</template>
