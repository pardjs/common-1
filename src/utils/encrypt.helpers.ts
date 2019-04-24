import * as bcrypt from "bcrypt";
import { createHash, createHmac, HexBase64Latin1Encoding } from "crypto";

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

export const hashPassword = async (raw: string, saltRound: number = 10) => {
  const hash = await bcrypt.hash(raw, saltRound);
  return hash;
};

export const comparePassword = async (raw: string, hash: string) => {
  const result = await bcrypt.compare(raw, hash);
  return result;
};

export const sha1 = (
  key: string,
  content: string,
  encoding: HexBase64Latin1Encoding = "base64",
) => {
  return createHmac("sha1", key)
    .update(content)
    .digest(encoding);
};

export const objToBase64 = (obj: object) => {
  return Buffer.from(JSON.stringify(obj)).toString("base64");
};
