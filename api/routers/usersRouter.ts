import { Router } from "https://deno.land/x/oak/mod.ts";
import { createNewUser, login } from "../supabaseServices";
import { LoginUserModel } from "../../models/Users/LoginUserModel";

const usersRouter = new Router();

usersRouter.post("/users/login", (ctx, next) => {
  const loginUserModel: LoginUserModel = ctx.request.body().value;
  console.log(loginUserModel);
  const result = login(loginUserModel);
  console.log(result);
  ctx.response.body = result;
  return next();
});

export default usersRouter