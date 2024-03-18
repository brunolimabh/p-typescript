import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Bruno",
        lasName: "Henrique",
        email: "bruno@gmail.com",
        password: "123",
      },
    ];
  }
}
