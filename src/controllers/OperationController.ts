import { Resolver, Mutation, Arg , Query, Authorized} from "type-graphql";
import Operation from '../schemas/operation';
import dbOperation from '../database/models/Operations'; 
import InputOperation from '../schemas/InputsType/InputOperation';


import ArrayOperation from "../schemas/ArrayType/ArrayOperation";


@Resolver(Operation)
class OperationController {

  @Authorized()
  @Query(returns => [Operation], { name:'Operations' })
  async find() {
    const operations = await dbOperation.find().select(
      [
      'active',
      'open',
      'close',
      'time_operation',
      'qtd_buy',
      'qtd_sell',
      'side',
      'price_buy',
      'price_sell',
      'market_price',
      'mep',
      'men',
      'averange',
      'result',
      'result_por',
      'total',
      'tet',
      'stop',
      'target',
      'author',
      'strategy',  
      ]
    );
    return operations;
  }

  @Authorized()
  @Query(returns => Operation, { name:'Operation' })
  async findById(
    @Arg("id") id: String
  ) {
    const operation = await dbOperation.findById(id);
    if(!operation) {
      throw new Error('Operation does not exists');
    }
    return operation;
  }

  @Authorized()
  @Query(returns => [Operation], { name:'userOperation' })
  async userOperation(@Arg("id") id: String,) {

    const operation =  dbOperation.find().where({author: id})
      if(!operation){
        throw new Error('Operation does not exists');
      }
      return operation;
  }
  
  @Authorized()
  @Mutation(returns => [Operation])
   async createOperation(
    @Arg("data") data: ArrayOperation,
  ){
   
     const operations = await data.operation.map((oper) => dbOperation.create(oper));
    
     return operations; 

    
  }
  @Mutation(returns => Operation)
   async updateOperation(
     @Arg("id") id: String,
    @Arg("data") data: InputOperation,
  ){
    let operationId = dbOperation.findById(id);

    if (!operationId){
      throw new Error('Operation does not exists');
    }   
    const operations = await dbOperation.findByIdAndUpdate(id, data, {new: true});
   
    return operations; 

    
  }

  @Mutation(returns => Boolean)
   async deleteOperation(
     @Arg("id") id: String,
  ){
    let operationId = dbOperation.findById(id);

    if (!operationId){
      throw new Error('Operation does not exists');
    }   
    return !!(await dbOperation.findByIdAndDelete(id))   
  }


}


export default OperationController;