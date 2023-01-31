<script setup lang="ts">
import { provide } from "vue";
import { useRouter } from "vue-router";
import {
  AudienceListForm,
  LIST_FORM_API_PROVIDE_KEY,
} from "@/app/lists/ListForm";
import { useMeta } from "@/shared/lib/composables/meta";
import { MockListApi } from "@/infra/api/list";

useMeta("Создание списка | Аудитория | SM");

const listApi = MockListApi.getInstance();
provide(LIST_FORM_API_PROVIDE_KEY, listApi);

const router = useRouter();

function redirectToLists() {
  router.push({ name: "audience_lists" });
}
</script>

<template>
  <div class="container">
    <BasePageHeader>
      Создание списка
      <template #extra>
        <BaseButton @click="redirectToLists">Отменить</BaseButton>
      </template>
    </BasePageHeader>
    <AudienceListForm @submitForm="redirectToLists" />
  </div>
</template>
