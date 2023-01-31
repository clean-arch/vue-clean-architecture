import { useLoader } from "@/shared/lib/composables/loader";
import { validInject } from "@/shared/lib/di";
import { storeToRefs } from "pinia";
import { reactive } from "vue";
import { useFilesStore } from "../store";
import type { FilesTableApiPort } from "./ports";

export const FILES_TABLE_API_PROVIDE_KEY = Symbol("FilesTableApi");

export function useFilesTableStore() {
  const api = validInject<FilesTableApiPort>(
    FILES_TABLE_API_PROVIDE_KEY,
    "ContactsTableApiPort"
  );

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
