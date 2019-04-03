import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { logger } from "../logger/index";

const childLogger = logger.child({ service: "roles-guard" });

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  public canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) {
      childLogger.error("user not found", {
        reqBody: request.body,
        reqHeaders: request.headers,
      });
      return false;
    }
    const roles = this.reflector.get<string[]>(
      "allowedRoles",
      context.getHandler(),
    );
    if (!roles || roles.length === 0 || roles[0] === "*") {
      return true;
    }
    if (!user.role) {
      return false;
    }
    return roles.includes(user.role);
  }
}
