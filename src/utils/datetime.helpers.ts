import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

export const getDateStartEnd = (date?: string) => {
  const day = dayjs(date).locale("zh-cn");
  return {
    end: day.endOf("day").toISOString(),
    start: day.startOf("day").toISOString(),
  };
};
