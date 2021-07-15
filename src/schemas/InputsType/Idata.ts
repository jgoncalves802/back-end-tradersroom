import { Field, InputType } from 'type-graphql';

@InputType()
class IdataDashbordOperation { 
  @Field()
    provider_id: string;
}

export default IdataDashbordOperation;