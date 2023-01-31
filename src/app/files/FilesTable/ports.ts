import type { BaseFetchManyApiPort } from "@/app/common/ports";
import type { AppFile } from "@/domain/entities/file";

export type FilesTableApiPort = BaseFetchManyApiPort<AppFile>;
