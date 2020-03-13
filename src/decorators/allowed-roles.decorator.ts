import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const AllowedRoles = (...roles: string[]): CustomDecorator<string> =>
  SetMetadata('allowedRoles', roles);
