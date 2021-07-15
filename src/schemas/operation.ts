import  { IOperation } from '../database/models/Operations';
import {Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
class Operation implements IOperation {
  
  @Field(type => ID)
  _id: any;

  @Field()
  active: string;

  @Field({ nullable: false })
  open: string;

  @Field({ nullable: false })
  close: string;

  @Field({ nullable: false })
  time_operation: string;

  @Field({ nullable: false })
  qtd_buy: string;

  @Field({ nullable: false })
  qtd_sell: string;

  @Field({ nullable: false })
  side: string;

  @Field({ nullable: false })
  price_buy: string;

  @Field({ nullable: false })
  price_sell: string;

  @Field({ nullable: false })
  market_price: string;

  @Field({nullable: true})
  mep: string;

  @Field({nullable: true})
  men: string;
  
  @Field({nullable: true})
  averange: string;

  @Field({nullable: true})
  result: string;

  @Field({ nullable: false })
  result_por: string;
  
  @Field({ nullable: false })
  total: string;
  
  @Field({ nullable: false })
  tet: string;
  
  @Field({nullable: true})
  stop?: string;
  
  @Field({nullable: true})
  target?: string;

  @Field(type => ID)
  author: any;
  
  @Field(type => ID, {nullable: true})
  strategy?: any;
}

export default Operation;