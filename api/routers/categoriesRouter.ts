import { Router } from "https://deno.land/x/oak/mod.ts";

const categoriesRouter = new Router();

categoriesRouter.get("/categories", (ctx, next) => {
  ctx.response.body = "Catergories work !";
  return next();
});

export default categoriesRouter