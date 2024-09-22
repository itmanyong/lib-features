import createLoggerHelper from "./createLogger";
export { default as createLoggerHelper } from "./createLogger";
export type * from "./types";

export const logger = createLoggerHelper("log", "info");
