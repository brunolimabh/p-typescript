import exprees from "express";
import { config } from "dotenv";
import { GetUsersController } from "./controllers/get-users/get-user";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";

config();

const app = exprees();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/users", async (req, res) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();

  const getUsersController = new GetUsersController(mongoGetUsersRepository);

  const { body, statusCode } = await getUsersController.handle();

  res.send(body).status(statusCode);
});
