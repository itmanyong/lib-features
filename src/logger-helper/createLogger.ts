import { gradient, red, green, yellow, cyan, gray, magenta } from "./color";
import type { LoggerType, Logger } from "./types";
import type { ColorFn } from "./color";

const LoggerLevelMap = {
  log: 0,
  info: 1,
  success: 2,
  warn: 3,
  error: 4,
  debug: 5,
};

export default function createLoggerHelper(name?: string, logLevel?: LoggerType): Logger {
  const createTypeLog = (type: LoggerType, color: ColorFn) => {
    return (...msgs: string[]) => {
      if (LoggerLevelMap[type] < LoggerLevelMap[logLevel || "log"]) return;
      console.log(gradient(`[${name}]`), ...msgs.map((msg) => color(msg)));
    };
  };

  return {
    log: createTypeLog("log", cyan),
    info: createTypeLog("info", gray),
    success: createTypeLog("success", green),
    warn: createTypeLog("warn", yellow),
    error: createTypeLog("error", red),
    debug: createTypeLog("debug", magenta),
  };
}
