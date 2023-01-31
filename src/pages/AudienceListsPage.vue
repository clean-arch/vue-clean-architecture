<script setup lang="ts">
import { provide } from "vue";
import { useRouter } from "vue-router";
import {
  AudienceListsTable,
  LISTS_TABLE_API_PROVIDE_KEY,
} from "@/app/lists/ListsTable";
import { useMeta } from "@/shared/lib/composables/meta";
import { MockListApi } from "@/infra/api/list";

useMeta("Списки | Аудитория | SM");

const router = useRouter();

function openAddListForm() {
  router.push({ name: "audience_create_list" });
}

const listsApi = MockListApi.getInstance();
provide(LISTS_TABLE_API_PROVIDE_KEY, listsApi);
</script>

<template>
  <div class="container">
    <BasePageHeader>
      Списки
      <template #extra>
        <BaseButton :isPrimary="true" @click="openAddListForm">
          Добавить список
        </BaseButton>
      </template>
    </BasePageHeader>
    <AudienceListsTable />
  </div>
</template>
