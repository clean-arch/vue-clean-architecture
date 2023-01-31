<script setup lang="ts">
import { provide } from "vue";
import { useRouter } from "vue-router";
import {
  AudienceContactForm,
  CONTACT_FORM_API_PROVIDE_KEY,
} from "@/app/contacts/ContactForm";
import { useMeta } from "@/shared/lib/composables/meta";
import { MockContactApi } from "@/infra/api/contact";

useMeta("Создание контакта | Аудитория | SM");

const contactApi = MockContactApi.getInstance();
provide(CONTACT_FORM_API_PROVIDE_KEY, contactApi);

const router = useRouter();
function redirectToContacts() {
  router.push({ name: "audience_contacts" });
}
</script>

<template>
  <div class="container">
    <BasePageHeader>
      Создание контакта
      <template #extra>
        <BaseButton @click="redirectToContacts">Отменить</BaseButton>
      </template>
    </BasePageHeader>
    <AudienceContactForm @submitForm="redirectToContacts" />
  </div>
</template>
