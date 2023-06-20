import { Application } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import usersRouter from './routers/usersRouter';
import categoriesRouter from './routers/categoriesRouter';
import tasksRouter from './routers/tasksRouter';

const app = new Application();
app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods());

app.use(categoriesRouter.routes());
app.use(categoriesRouter.allowedMethods());

app.use(tasksRouter.routes());
app.use(tasksRouter.allowedMethods());

await app.listen({port: 8090});