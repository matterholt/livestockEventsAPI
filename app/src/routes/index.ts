import { Hono } from "hono";
import { livestockEvent } from "./AnimalEvents";

import { jwt } from "hono/jwt";
import type { JwtVariables } from "hono/jwt";
import { apiKeyAuth } from "../middleware/auth";
const routes = new Hono();

const validApiKeys = ["your-api-key-1", "your-api-key-2"];

routes.use("api/v1/*", apiKeyAuth(validApiKeys));
routes.route("api/v1/", livestockEvent);

export default routes;
