import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

export const getDateStartEnd = (date?: string, tz: number = 8) => {
  const day = dayjs(date, { utc: true });
  return {
    end: day.add(24 - tz, "hour").toISOString(),
    start: day.subtract(tz, "hour").toISOString(),
  };
};
