import { Resolver, Mutation, Arg , Query, Authorized} from "type-graphql";
import Strategy from '../schemas/Strategy';
import dbStrategy from '../database/models/Strategy'; 
import InputStrategy from '../schemas/InputsType/InputStrategy';


import ArrayStrategy from "../schemas/ArrayType/ArrayStrategy";


@Resolver(Strategy)
class StrategyController {

  @Authorized()
  @Query(returns => [Strategy], { name:'Strategys' })
  async find() {
    const strategys = await dbStrategy.find().select(
      [
        'name',
        'allocated_capital',
        'initial_capital',
        'return',
        'daySwat',
        'risk',
        'goas_financial_day',
        'goas_financial_weekly',
        'goas_financial_monthly',
        'goas_points_day',
        'goas_points_weekly',
        'goas_points_monthly',
        'limit_financial_day',
        'limit_financial_weekly',
        'limit_financial_monthly',
        'limit_points_day',
        'limit_points_weekly',
        'limit_points_monthly',
        'step_by_step',
        'author',
      ]
    );
    return strategys;
  }

  @Authorized()
  @Query(returns => Strategy, { name:'Strategy' })
  async findById(
    @Arg("id") id: String
  ) {
    const strategy = await dbStrategy.findById(id);
    if(!strategy) {
      throw new Error('Strategy does not exists');
    }
    return strategy;
  }

  @Authorized()
  @Query(returns => [Strategy], { name:'userStrategy' })
  async userStrategy(@Arg("id") id: String,) {

    const strategy =  dbStrategy.find().where({author: id})
      if(!strategy){
        throw new Error('Strategy does not exists');
      }
      return strategy;
  }
  
  @Authorized()
  @Mutation(returns => [Strategy])
   async createStrategy(
    @Arg("data") data: ArrayStrategy,
  ){
   
     const strategys = await data.strategy.map((stra) => dbStrategy.create(stra));
    
     return strategys; 

  }
  @Mutation(returns => Strategy)
   async updateStrategy(
     @Arg("id") id: String,
    @Arg("data") data: InputStrategy,
  ){
    let strategyId = dbStrategy.findById(id);

    if (!strategyId){
      throw new Error('Strategy does not exists');
    }   
    const strategys = await dbStrategy.findByIdAndUpdate(id, data, {new: true});
   
    return strategys; 

    
  }

  @Mutation(returns => Boolean)
   async deleteStrategy(
     @Arg("id") id: String,
  ){
    let strategyId = dbStrategy.findById(id);

    if (!strategyId){
      throw new Error('Strategy does not exists');
    }   
    return !!(await dbStrategy.findByIdAndDelete(id))   
  }


}


export default StrategyController;