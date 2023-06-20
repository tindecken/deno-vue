import { Router } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { createNewUser, login } from "../supabaseServices.ts";
import { LoginUserModel } from "../../models/Users/LoginUserModel.ts";
import { CreateUserModel } from "../../models/Users/CreateUserModel.ts";

const usersRouter = new Router();

usersRouter.post("/users/login", async (ctx, next) => {
  const loginUserModel: LoginUserModel = await ctx.request.body().value;
  console.log('loginUserModel', loginUserModel);
  const result = await login(loginUserModel);
  console.log('result', result);
  ctx.response.body = result;
  return next();
});

usersRouter.post("/users/create", async (ctx, next) => {
  const createUserModel: CreateUserModel = await ctx.request.body().value;
  console.log('createUserModel', createUserModel);
  const result = await createNewUser(createUserModel);
  console.log('result', result);
  ctx.response.body = result;
  return next();
});

export default usersRouter