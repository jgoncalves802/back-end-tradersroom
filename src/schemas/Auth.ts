import { Field, ObjectType } from "type-graphql";
import { IUser } from "../database/models/users";
import User from "./users";

interface IAuth{
  token: string;
  user: IUser;
}

@ObjectType()
class Auth implements IAuth {

  @Field({nullable: false})
  token: string;

  @Field({nullable: false})
  user: User;

}

export default Auth;