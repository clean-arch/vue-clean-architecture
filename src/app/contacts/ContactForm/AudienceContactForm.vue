<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { ContactFormApiCreateProps } from "./ports";
import { useContactFormStore } from "./store";

const store = useContactFormStore();

const emit = defineEmits(["submitForm"]);

const contactData = ref({
  email: "",
} as ContactFormApiCreateProps);

async function submitForm() {
  await store.create(contactData.value);
  emit("submitForm");
  contactData.value = { email: "" };
}
</script>

<template>
  <div>
    <div>
      <label>Email</label>
      <input v-model="contactData.email" />
    </div>
    <BaseButton
      :isPrimary="true"
      :isLoading="store.loading"
      @click="submitForm"
    >
      Добавить
    </BaseButton>
  </div>
</template>
