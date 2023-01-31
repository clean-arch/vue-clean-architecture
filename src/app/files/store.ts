import type { AppFile } from "@/domain/entities/file";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFilesStore = defineStore("files", () => {
  const data = ref([] as AppFile[]);

  function setFiles(files: AppFile[]): void {
    data.value = files;
  }

  function addFile(file: AppFile): void {
    data.value.unshift(file);
  }

  return { files: data, setFiles, addFile };
});
