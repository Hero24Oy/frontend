/**
 * * Could not use default imports, this error
 * import merge from 'lodash/merge';
 * Module '"frontend/app-hero/node_modules/@types/lodash/merge"' can only be default-imported using the 'esModuleInterop' flagts(1259)
 * merge.d.ts(2, 1): This module is declared with 'export =', and can only be used with a default import when using the 'esModuleInterop' flag.
 */
import { merge } from 'lodash';

export const mergeObjects = <ReturnType = Record<string, unknown>>(
  list: Record<string, unknown>[],
): ReturnType => list.reduce((acc, obj) => merge(acc, obj), {} as ReturnType);
