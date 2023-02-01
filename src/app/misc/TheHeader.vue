<script setup lang="ts">
import TheBrandLogo from "./TheBrandLogo.vue";
</script>

<template>
  <header>
    <div class="container">
      <TheBrandLogo class="logo" />
      <BaseNav>
        <RouterLink :to="{ name: 'audience_contacts' }">Контакты</RouterLink>
      </BaseNav>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  background: var(--color-background-header);
  padding: 0.7rem 0;

  .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .logo {
    margin-right: 2rem;
  }
}
</style>
