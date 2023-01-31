<script lang="ts">
import { defineComponent, PropType } from "vue";

interface TableColumn {
  key: string;
  title: string;
}

export default defineComponent({
  props: {
    loading: Boolean,
    columns: {
      type: Array as PropType<TableColumn[]>,
      required: true,
    },
    dataItems: {
      type: Array,
      required: true,
    },
  },
});
</script>

<template>
  <div class="wrapper" :class="{ '--loading': loading }">
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key">
            {{ column.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dataItem, index) in dataItems" :key="dataItem.id || index">
          <td v-for="column in columns" :key="column.key">
            <slot :name="column.key" :dataItem="dataItem">{{
              dataItem[column.key]
            }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  width: 100%;
  min-height: 200px;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

td,
th {
  text-align: left;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--color-table-border);
}

th {
  background: var(--color-table-background);
  font-weight: bold;

  &:not(:last-child) {
    border-right: 1px solid var(--color-table-border);
  }
}

tbody tr:hover {
  background: var(--color-table-background);
}

.--loading {
  pointer-events: none;

  tbody,
  thead {
    opacity: 0.7;
  }

  &::after {
    position: absolute;
    left: calc(50% - (1em * 0.5));
    top: 100px;
    position: absolute !important;
    animation: spinAround 0.5s infinite linear;
    border: 2px solid var(--color-spinner);
    border-top-color: rgb(219, 219, 219);
    border-right-color: rgb(219, 219, 219);
    border-radius: 9999px;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: 2em;
    position: relative;
    width: 2em;
    z-index: 2;
  }
}
</style>
