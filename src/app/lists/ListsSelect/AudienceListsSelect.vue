<script setup lang="ts">
import { computed } from "vue";
import { useListsSelectStore } from "./store";

const store = useListsSelectStore();

const props = defineProps({
  extraItems: {
    type: Array,
    default: () => [],
  },
  // define props for the v-model directive
  moduleValue: String,
});

const emit = defineEmits(["update:moduleValue"]);

const value = computed({
  get() {
    return props.moduleValue;
  },
  set(value) {
    emit("update:moduleValue", value);
  },
});

const selectListItems = computed(() => {
  return props.extraItems.concat(store.selectItems);
});

store.fetchMany();
</script>

<template>
  <BaseSelect data-test="lists" v-model="value" :items="selectListItems" />
</template>
