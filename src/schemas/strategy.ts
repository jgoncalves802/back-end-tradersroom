import  { IStrategy } from '../database/models/Strategy';
import {Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
class Strategy implements IStrategy {
  
  @Field(type => ID)
  _id: any;

  @Field()
  name: string;

  @Field()
  allocated_capital: string;

  @Field()
  initial_capital: string;

  @Field()
  return: string;
  
  @Field()
  daySwat:string;

  @Field()
  risk: string;

  @Field()
  goas_financial_day: string;

  @Field()
  goas_financial_weekly: string;

  @Field()
  goas_financial_monthly: string;

  @Field()
  goas_points_day: string;

  @Field()
  goas_points_weekly: string;

  @Field()
  goas_points_monthly: string;

  @Field()
  limit_financial_day: string;

  @Field()
  limit_financial_weekly: string;

  @Field()
  limit_financial_monthly: string;
  
  @Field()
  limit_points_day: string;
  
  @Field()
  limit_points_weekly: string;
  
  @Field()
  limit_points_monthly: string;

  @Field()
  step_by_step: string;
 
  @Field(type => ID)
  author: any;
}

export default Strategy;