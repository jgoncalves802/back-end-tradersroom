import { buildSchemaSync  } from 'type-graphql';
import User from './users';
import Operation from './operation';
import Strategy from './strategy';
import Idata from './Idata';

import UserController from '../controllers/UserController';
import OperationController from '../controllers/OperationController';
import SessionController from '../controllers/SessionController';
import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';
import StrategyController from '../controllers/StrategyController';
import DashboardController from '../controllers/DashboardController';

import Auth from './Auth';


import AutheticantionAnssurance from '../middlewares/AutheticantionAnssurance';


const schema  = buildSchemaSync ({
  resolvers: [
    User, 
    UserController, 
    Operation, 
    OperationController, 
    Auth , 
    SessionController, 
    ForgotPasswordController, 
    ResetPasswordController, 
    Strategy, 
    StrategyController,
    Idata,
    DashboardController
  ],
  dateScalarMode:"isoDate",
  authChecker: AutheticantionAnssurance
});

export default schema;