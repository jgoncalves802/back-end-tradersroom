import {Field, InputType } from 'type-graphql';

@InputType()
class InputUser {  
  @Field()
  firstName: string;
  
  @Field()
  lastName: string;

  @Field()
  email: string;
  
  @Field()
  avatar: string;
  
  @Field()
  password: string;

  @Field()
  active: Boolean;

  @Field({nullable: false})
  createdAt?: Date;

  @Field({nullable: false})
  updatedAt?: Date;
}

export default InputUser;