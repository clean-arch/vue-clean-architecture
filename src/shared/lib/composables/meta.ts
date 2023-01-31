import { onMounted } from "vue";

export function useMeta(title: string) {
  onMounted(() => {
    document.title = title;
  });
}
