/**
 * 创建匹配函数
 */
import { createFilter as _createFilter } from "@rollup/pluginutils";

export type FilterPattern = ReadonlyArray<string | RegExp> | string | RegExp | null;

export const createFilter = _createFilter as (
  include?: FilterPattern,
  exclude?: FilterPattern,
  options?: { resolve?: string | false | null }
) => (id: string | unknown) => boolean;
