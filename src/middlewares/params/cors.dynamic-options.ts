import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import { logger } from "../../logger/index";

const whitelist = (process.env.FRONTEND_URL || "").split(",");
export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    logger.info("origin", { origin });
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
};
