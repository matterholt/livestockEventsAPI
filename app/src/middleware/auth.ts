import { jwt } from "hono/jwt";
import type { JwtVariables } from "hono/jwt";

export const apiKeyAuth = (validApiKeys: string[]) => {
  return async (c, next) => {
    const apiKey = c.req.header("X-API-KEY") || c.req.query("api_key");

    if (!apiKey || !validApiKeys.includes(apiKey)) {
      return c.json({ error: "Unauthorized: Invalid API key" }, 401);
    }

    await next();
  };
};

export const apiPermission = (permission: string) => {
  return async (c, next) => {
    const token = c.req.header("Authorization") || c.req.query("token");
    if (!token) {
      c.status(401);
      return c.json({ error: "Unauthorized" });
    }
    const decoded = await jwt.verify(token, "secret");
    if (!decoded || !decoded.permissions.includes(permission)) {
      c.status(403);
      return c.json({ error: "Forbidden" });
    }
    await next();
  };
};
