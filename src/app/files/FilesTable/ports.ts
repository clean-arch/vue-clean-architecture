import type { BaseFetchManyApiPort } from "@/shared/lib/ports";
import type { AppFile } from "../domain";

export type FilesTableApiPort = BaseFetchManyApiPort<AppFile>;
