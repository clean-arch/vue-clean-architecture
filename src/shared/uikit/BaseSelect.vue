<script setup lang="ts">
import { computed, PropType } from "vue";

interface SelectItem {
  value: string;
  label: string;
  disabled?: boolean;
}

const props = defineProps({
  dataTest: { type: String, default: "base" },
  items: {
    type: Array as PropType<SelectItem[]>,
    required: true,
  },
  // Define props for v-model directive
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <select v-model="value" :data-test="`${dataTest}-select`">
    <option
      v-for="selectItem in items"
      :key="selectItem.value"
      :value="selectItem.value"
      :disabled="selectItem.disabled"
    >
      {{ selectItem.label }}
    </option>
  </select>
</template>
