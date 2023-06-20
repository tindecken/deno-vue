import { Router } from "https://deno.land/x/oak/mod.ts";

const tasksRouter = new Router();

tasksRouter.get("/tasks", (ctx, next) => {
  ctx.response.body = "Tasks works !";
  return next();
});

export default tasksRouter