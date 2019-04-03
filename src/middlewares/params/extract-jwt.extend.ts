import { Request } from "express";
// This is an extension of `passport-jwt` > `extract-jwt`.
export const fromAnywhere = () => {
  return (req: Request) => {
    const token: string =
      req.query.access_token ||
      req.headers.Authorization ||
      req.headers.authorization ||
      req.cookies.authorization;
    if (!token) {
      return null;
    }
    const parts = token.split(" ");
    if (parts.length > 1) {
      return parts.pop();
    }
    return token;
  };
};
