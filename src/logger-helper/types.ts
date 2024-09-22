export type LoggerType = "debug" | "info" | "warn" | "error" | "success" | "log";

export type LoggerFun = (...messages: string[]) => void;

export type Logger = {
  [key in LoggerType]: LoggerFun;
};
