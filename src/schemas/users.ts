import  { IUser } from '../database/models/users';
import {Field, ID, ObjectType} from 'type-graphql';

@ObjectType()
class User implements IUser {
  
  @Field(type => ID)
  _id: any;

  @Field()
  firstName: string;
  
  @Field()
  lastName: String;
  
  @Field()
  fullName: String;
  
  @Field()
  email: String;
  
  @Field()
  avatar?: String;
  
  @Field()
  password: String;

  @Field()
  active: Boolean;

  @Field({nullable: false})
  createdAt?: Date;

  @Field({nullable: false})
  updatedAt?: Date;
}

export default User;