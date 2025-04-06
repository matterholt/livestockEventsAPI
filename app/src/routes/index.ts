import { Hono } from "hono";
import { livestockEvent } from "./AnimalEvents";
import { permissionRuleSet } from "../data/apiScopes";

import { apiKeyAuth } from "../middleware/auth";
const routes = new Hono();

routes.use("api/v1/*", apiKeyAuth(validApiKeys));
routes.route("api/v1/livestock", livestockEvent);

export default routes;
