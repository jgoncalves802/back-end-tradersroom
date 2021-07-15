import  { IOperation } from '../../database/models/Operations';

import {Field, ID, InterfaceType } from 'type-graphql';


@InterfaceType()
abstract class IDashboardOperation { 
  
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

  @Field({ nullable: false })
  result: string;

  @Field({ nullable: false })
  result_por: string;

  @Field({ nullable: false })
  res_operation: string;

  @Field({ nullable: false })
  res_operation_por: string;
  
  @Field({ nullable: false })
  total: string;
  
  @Field({ nullable: false })
  tet: string;

  @Field(type => ID)
  author: any;
  
  @Field(type => ID, {nullable: true})
  strategy?: any;
}

export default IDashboardOperation;