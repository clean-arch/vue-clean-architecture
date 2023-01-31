<script setup lang="ts">
defineProps<{
  isPrimary: boolean;
  isLoading: boolean;
}>();
</script>

<template>
  <button
    type="button"
    :class="{ '--primary': isPrimary, '--loading': isLoading }"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  border: none;
  background: var(--color-button-background);
  color: var(--color-button-text);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  &.--primary {
    background: var(--color-link);
    color: var(--color-background);
  }

  &.--loading {
    color: transparent !important;
    pointer-events: none;

    &::after {
      position: absolute;
      left: calc(50% - (1em * 0.5));
      top: calc(50% - (1em * 0.5));
      position: absolute !important;
      animation: spinAround 0.5s infinite linear;
      border: 2px solid #dbdbdb;
      border-top-color: rgb(219, 219, 219);
      border-right-color: rgb(219, 219, 219);
      border-radius: 9999px;
      border-right-color: transparent;
      border-top-color: transparent;
      content: "";
      display: block;
      height: 1em;
      position: relative;
      width: 1em;
    }
  }
}
</style>
