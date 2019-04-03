import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { logger } from "../logger/index";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  public catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req = ctx.getRequest();
    let status = exception.getStatus && exception.getStatus();
    let resData;
    if (!status) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      resData = {
        message: exception.message,
        stack: process.env.NODE_ENV !== "production" && exception.stack,
      };
    } else {
      resData = exception.getResponse() as object;
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
    // TODO: handle typical http status code properly
    res.status(status).json({
      error: {
        ...resData,
      },
    });
  }
}
