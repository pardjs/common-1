import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { logger } from '../../logger/index';

const whitelist = (process.env.FRONTEND_URL || '').split(',');
export const corsOptions: CorsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (process.env.PRINT_ORIGIN) {
      logger.info('origin', { origin });
    }
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      logger.error('origin is not in the cors whitelist', {
        whitelist,
        origin,
      });
      callback(null, false);
    }
  },
};
