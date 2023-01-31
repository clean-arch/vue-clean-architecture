<script>
import { useMeta } from "@/shared/lib/composables/meta";
useMeta("Аудитория | SM");
</script>

<template>
  <div class="container">
    <BaseNav>
      <RouterLink :to="{ name: 'audience_contacts' }">Контакты</RouterLink>
      <RouterLink :to="{ name: 'audience_lists' }">Списки</RouterLink>
    </BaseNav>
  </div>
  <RouterView />
</template>
