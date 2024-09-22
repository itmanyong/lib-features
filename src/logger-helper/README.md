# logger-helper

共用的命令行日志输出工具库

## 使用

```ts
import { logger, createLoggerHelper } from "logger-helper";
// 内置的 logger 实例
logger.log("log"); // [logger] log
logger.info("info"); // [logger] info
logger.warn("warn"); // [logger] warn
logger.error("error"); // [logger] error
logger.success("success"); // [logger] success
logger.debug("debug"); // [logger] debug

// 创建自定义的 logger 实例
const loggerHelper = createLoggerHelper("my-logger", "log");
loggerHelper.log("log"); // [my-logger] log
loggerHelper.info("info"); // [my-logger] info
loggerHelper.warn("warn"); // [my-logger] warn
loggerHelper.error("error"); // [my-logger] error
loggerHelper.success("success"); // [my-logger] success
loggerHelper.debug("debug"); // [my-logger] debug
```

## API

### logger

内置的 logger 实例，提供了 log、info、warn、error、success、debug 六个方法，分别对应六种日志级别。

### createLoggerHelper

创建一个自定义的 logger 实例，参数为 logger 名称和日志级别，返回一个包含 log、info、warn、error、success、debug 六个方法的对象。

## 类型定义
```ts
// 日志级别
export type LoggerType = "debug" | "info" | "warn" | "error" | "success" | "log";
// 日志方法签名
export type LoggerFun = (message: string) => void;
// 日志方法对象
export type Logger = {
  [key in LoggerType]: LoggerFun;
};
```