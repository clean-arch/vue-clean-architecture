import { ref } from "vue";

export function useLoader() {
  const loading = ref(false);

  async function wait<T>(process: Promise<T>): Promise<T> {
    loading.value = true;
    const res = await process;
    loading.value = false;
    return res;
  }

  return { loading, wait };
}
