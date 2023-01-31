<script setup lang="ts">
import { provide } from "vue";
import {
  FilesTable,
  FILES_TABLE_API_PROVIDE_KEY,
} from "@/app/files/FilesTable";
import { useMeta } from "@/shared/lib/composables/meta";
import { MockFileApi } from "@/infra/api/file";

useMeta("Файлы | SM");

const fileApi = MockFileApi.getInstance();
provide(FILES_TABLE_API_PROVIDE_KEY, fileApi);
</script>

<template>
  <div class="container">
    <BasePageHeader>
      Файлы
      <template #extra>
        <BaseButton :isPrimary="true">Добавить файл</BaseButton>
      </template>
    </BasePageHeader>
    <FilesTable />
  </div>
</template>
