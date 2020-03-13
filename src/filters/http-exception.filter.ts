import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { captureException, init as initSentry } from "@sentry/node";
import { Request } from "express";
import { DEFAULT_LANGUAGE } from "../constants";
import { SENTRY_DSN } from "../constants";
import { logger } from "../logger";

if (SENTRY_DSN) {
  initSentry({ dsn: SENTRY_DSN });
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  public catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req: Request = ctx.getRequest();
    let status = exception.getStatus && exception.getStatus();
    captureException(exception);
    let resData;
    if (!status) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      resData = {
        message: exception.message,
        stack: process.env.NODE_ENV !== "production" && exception.stack,
      };
    } else {
      resData = exception.getResponse() as any;
      if (
        resData.message &&
        typeof resData.message === "object" &&
        resData.message
      ) {
        let lang = DEFAULT_LANGUAGE;
        if (req.headers["accept-language"]) {
          lang = req.headers["accept-language"].startsWith("en") ? "en" : "zh";
        }
        const txtMessage = resData.message[lang];
        if (txtMessage) {
          resData.message = txtMessage;
        }
      }
    }
    if (status !== HttpStatus.OK) {
      logger.error("error caught in http exception handler", {
        reqBody: req.body,
        reqHeaders: req.headers,
        reqQuery: req.query,
        resData,
        status,
      });
    }
    const responseBody = resData.error ? resData : {
      error: {
        ...resData,
      },
    };
    res.status(status).json(responseBody);
  }
}
