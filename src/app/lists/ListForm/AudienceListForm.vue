<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { useListFormStore } from "./store";
import type { CreateListData } from "@/app_core/ports/list";

const emit = defineEmits(["submitForm"]);

const store = useListFormStore();

const listData = ref({
  displayName: "",
} as CreateListData);

async function submitForm() {
  await store.create(listData.value);
  emit("submitForm");
  listData.value = { displayName: "" };
}
</script>

<template>
  <div>
    <div>
      <label>Отображаемое имя</label>
      <input v-model="listData.displayName" />
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
