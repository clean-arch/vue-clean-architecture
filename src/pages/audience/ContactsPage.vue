<script setup lang="ts">
import { ref, watch, provide } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  AudienceListsSelect,
  LISTS_SELECT_API_PROVIDE_KEY,
} from "@/app/lists/ListsSelect";
import {
  AudienceContactsTable,
  CONTACTS_TABLE_API_PROVIDE_KEY,
} from "@/app/contacts/ContactsTable";
import { useMeta } from "@/shared/lib/composables/meta";
import { MockContactApi } from "@/infra/api/contact";
import { MockListApi } from "@/infra/api/list";

useMeta("Контакты | Аудитория | SM");

const router = useRouter();
const route = useRoute();

function openAddContactForm() {
  router.push({ name: "audience_create_contact" });
}

const selectedListId = ref("");
watch(
  () => route.params.listId,
  (listId: string) => {
    selectedListId.value = listId ?? "";
  },
  { immediate: true }
);

function selectList(selectedListId) {
  if (route.params.listId !== selectedListId) {
    router.push({
      name: "audience_contacts",
      params: { listId: selectedListId },
    });
  }
}

const contactApi = MockContactApi.getInstance();
provide(CONTACTS_TABLE_API_PROVIDE_KEY, contactApi);

const listApi = MockListApi.getInstance();
provide(LISTS_SELECT_API_PROVIDE_KEY, listApi);
</script>

<template>
  <div class="container">
    <BasePageHeader>
      Контакты
      <template #extra>
        <BaseButton
          data-test="openCreateContactForm"
          @click="openAddContactForm"
        >
          Добавить контакт
        </BaseButton>
      </template>
    </BasePageHeader>
    <AudienceListsSelect
      :extraItems="[{ value: '', label: 'Все контакты' }]"
      :moduleValue="selectedListId"
      @update:moduleValue="selectList"
    />
    <AudienceContactsTable :listId="selectedListId" />
  </div>
</template>
