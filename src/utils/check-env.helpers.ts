import { ok } from "assert";

export const checkEnv = (...names: string[]) => {
  for (const name of names) {
    ok(process.env[name], `Environment variable ${name} cannot be empty!`);
  }
};
