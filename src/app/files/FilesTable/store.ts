import { useLoader } from "@/shared/lib/composables/loader";
import { defineInjectKey, validInject } from "@/shared/lib/di";
import { storeToRefs } from "pinia";
import { reactive } from "vue";
import { useFilesStore } from "../store";
import type { FilesTableApiPort } from "./ports";

export const FILES_TABLE_API_PROVIDE_KEY =
  defineInjectKey<FilesTableApiPort>("FilesTableApi");

export function useFilesTableStore() {
  const api = validInject(FILES_TABLE_API_PROVIDE_KEY);

  const filesStore = useFilesStore();
  const { files } = storeToRefs(filesStore);

  const loader = useLoader();
  async function fetchMany() {
    const files = await loader.wait(api.fetchMany({}));
    filesStore.setFiles(files);
  }

  return reactive({
    loading: loader.loading,
    files,
    fetchMany,
  });
}
