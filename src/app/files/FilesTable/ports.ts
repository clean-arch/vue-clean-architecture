import type { AppFile } from "@/domain/entities/file";
import type { BaseFetchManyApiPort } from "@/shared/lib/ports";

export type FilesTableApiPort = BaseFetchManyApiPort<AppFile>;
