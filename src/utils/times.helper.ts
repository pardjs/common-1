import { MS_ONE_HOUR } from '../constants/index';

export const spanMSes = (base: Date, compare: Date = new Date()) => {
  return compare.getTime() - base.getTime();
};

export const spanHours = (base: Date, compare: Date = new Date()) => {
  return spanMSes(base, compare) / MS_ONE_HOUR;
};
