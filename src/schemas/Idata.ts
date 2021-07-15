import { ObjectType } from 'type-graphql';
import { Field } from 'type-graphql';

@ObjectType()
class Idata { 
  @Field()
    provider_id: string;

  @Field()
    dateInitial?: Date;

  @Field()
    dateEnd?: Date;  
}

export default Idata;