import { ReflectMetadata } from "@nestjs/common";

export const AllowedRoles = (...roles: string[]) =>
  ReflectMetadata("allowedRoles", roles);
