export const apiKeyAuth = (validApiKeys: string[]) => {
  return async (c, next) => {
    const apiKey = c.req.header("X-API-KEY") || c.req.query("api_key");

    if (!apiKey || !validApiKeys.includes(apiKey)) {
      return c.json({ error: "Unauthorized: Invalid API key" }, 401);
    }

    await next();
  };
};
