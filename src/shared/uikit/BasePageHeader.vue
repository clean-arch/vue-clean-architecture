<template>
  <header>
    <h1><slot /></h1>
    <div>
      <slot name="extra" />
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
