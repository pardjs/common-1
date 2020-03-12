export const MS_ONE_SECOND = 1000;
export const SECONDS_ONE_MINUTE = 60;
export const SECONDS_ONE_HOUR = SECONDS_ONE_MINUTE * 60;
export const MS_ONE_HOUR = SECONDS_ONE_HOUR * MS_ONE_SECOND;
export * from "./errors";
export const LOG_PATH = process.env.LOG_PATH;
export const DEFAULT_LANGUAGE = process.env.DEFAULT_LANGUAGE || "zh_CN";
export const SENTRY_DSN = process.env.SENTRY_DSN;
