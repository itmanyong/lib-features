import path from "node:path";
import { isWindows } from "./is";

const slash = (p: string) => p.replace(/\\/g, "/");
/**
 * 规范化路径
 * @param id 路径
 * @returns 规范化的路径
 */
export const normalizePath = (id: string) => path.posix.normalize(isWindows ? slash(id) : id);
