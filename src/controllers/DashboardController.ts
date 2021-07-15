import { Resolver, Arg , Query, Authorized, Float} from "type-graphql";
import Operation from '../schemas/operation';
import dbOperation from '../database/models/Operations'; 
import { IOperation } from '../database//models/Operations'
import { IStrategy } from '../database//models/Strategy'

import InputOperation from '../schemas/InputsType/InputOperation';
import ArrayDashboardOperation from "../schemas/ArrayType/ArrayDashboardOperation";
import IdataDashbordOperation from "../schemas/InputsType/Idata";

import Strategy from '../schemas/strategy';
import dbStrategy from '../database/models/Strategy'; 
import InputStrategy from '../schemas/InputsType/InputStrategy';
import ArrayStrategy from "../schemas/ArrayType/ArrayStrategy";

import DashboardOperation from '../schemas/DashboardOperation';

interface Idata {
  [key: string]: Number
}


@Resolver(Operation)
@Resolver(Strategy)
@Resolver(DashboardOperation)
class DashboardController {

  @Authorized()
  @Query(returns => Float)
  async dashboardOperation(@Arg("id") id: string) {
    const operation = await dbOperation.find().where({author: id});  
      if(!operation){
        throw new Error('Operation does not exists');
      }
    const strategy = await dbStrategy.find().where({author: id});
      if(!strategy) {
      throw new Error('Strategy does not exists');
      }
        
  }
}

export default DashboardController;

