import {Field, ID, InputType } from 'type-graphql';

@InputType()
class InputOperation {
  @Field({nullable: true})
  active: string;

  @Field({nullable: true})
  open: string;

  @Field({nullable: true})
  close: string;

  @Field({nullable: true})
  time_operation: string;

  @Field({nullable: true})
  qtd_buy: string;

  @Field({nullable: true})
  qtd_sell: string;

  @Field({nullable: true})
  side: string;

  @Field({nullable: true})
  price_buy: string;

  @Field({nullable: true})
  price_sell: string;

  @Field({nullable: true})
  market_price: string;
  
  @Field({nullable: true})
  mep: string;

  @Field({nullable: true})
  men: string;
  
  @Field({nullable: true})
  averange: string;

  @Field({nullable: true})
  result: string;

  @Field({nullable: true})
  result_por: string;
  
  @Field({nullable: true})
  total: string;
  
  @Field({nullable: true})
  tet: string;

  @Field({nullable: true})
  stop?: string;
  
  @Field({nullable: true})
  target?: string;

  @Field(type => ID, {nullable: true})
  strategy?: any;

  @Field(type => ID, {nullable: true})
  author: any;

  
}

export default InputOperation;