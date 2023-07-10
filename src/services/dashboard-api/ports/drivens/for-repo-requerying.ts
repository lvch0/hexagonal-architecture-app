import { ExternalUser, RepoUser } from "../../../repository/app/schemas/user";
import { User } from "../../app/schemas";

export interface ForRepoQuerying {
  getUser(email: string): Promise<ExternalUser>;
  createUser(user: User): Promise<ExternalUser>;
}
