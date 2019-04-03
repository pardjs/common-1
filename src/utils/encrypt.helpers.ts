import { createHash, createHmac } from "crypto";
export const md5 = (raw: string) => {
  return createHash("md5")
    .update(raw)
    .digest("hex");
};

export const sha256 = (raw: string, key: string) => {
  return createHmac("sha256", key)
    .update(raw)
    .digest("hex");
};

export const superMd5 = (raw: string, key: string) => {
  const hashed = sha256(raw, key);
  return md5(hashed);
};
