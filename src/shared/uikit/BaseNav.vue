<template>
  <nav>
    <slot />
  </nav>
</template>

<style scoped lang="postcss">
nav {
  width: 100%;
  font-size: 1rem;

  :slotted(a) {
    display: inline-block;
    border: none;
    color: var(--color-text);

    &:hover {
      color: var(--color-link);
    }

    &:not(:last-child) {
      margin-right: 1rem;
    }

    &.router-link-active {
      cursor: default;
      color: var(--color-link);
    }
  }
}
</style>
