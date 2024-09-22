/**
 * 是否是windows系统
 * @returns {boolean}
 */
export const isWindows = typeof process !== "undefined" && process.platform === "win32";
