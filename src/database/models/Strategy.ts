import mongoose, {Document, Schema} from 'mongoose';

export interface IStrategy {
  _id: any;
  name: string;
  allocated_capital: string;
  initial_capital: string;
  return: string;
  daySwat: string;
  risk: string;
  goas_financial_day: string;
  goas_financial_weekly: string;
  goas_financial_monthly: string;
  goas_points_day: string;
  goas_points_weekly: string;
  goas_points_monthly: string;
  limit_financial_day: string;
  limit_financial_weekly: string;
  limit_financial_monthly: string;
  limit_points_day: string;
  limit_points_weekly: string;
  limit_points_monthly: string;
  step_by_step: string;
  author: any;
  }

  interface IStrategyDocument extends Document  {
  name: string;
  allocated_capital: string;
  initial_capital: string;
  return: string;
  daySwat: string;
  risk: string;
  goas_financial_day: string;
  goas_financial_weekly: string;
  goas_financial_monthly: string;
  goas_points_day: string;
  goas_points_weekly: string;
  goas_points_monthly: string;
  limit_financial_day: string;
  limit_financial_weekly: string;
  limit_financial_monthly: string;
  limit_points_day: string;
  limit_points_weekly: string;
  limit_points_monthly: string;
  step_by_step: string;
  author: any;
  }


const StrategySchema = new Schema<IStrategyDocument>({
  name:{
    type: String,
    required: true,
  },
  allocated_capital:{
    type: String,
    required: true,
  },
  initial_capital:{
    type: String,
    required: true,
  },
  return:{
    type: String,
    required: true,
  },
  daySwat:{
    type: String,
    required: true,
  },
  risk:{
    type: String,
    required: true,
  },
  goas_financial_day:{
    type: String,
    required: true,
  },
  goas_financial_weekly:{
    type: String,
    required: true,
  },
  goas_financial_monthly:{
    type: String,
    required: true,
  },
  goas_points_day:{
    type: String,
    required: true,
  },
  goas_points_weekly:{
    type: String,
    required: true,
  },
  goas_points_monthly:{
    type: String,
    required: true,
  },
  limit_financial_day:{
    type: String,
    required: true,
  },
  limit_financial_weekly:{
    type: String,
    required: true,
  },
  limit_financial_monthly:{
    type: String,
    required: true,
  },
  limit_points_day:{
    type: String,
    required: true,
  },
  limit_points_weekly:{
    type: String,
    required: true,
  },
  limit_points_monthly:{
    type: String,
    required: true,
  },
  step_by_step:{
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt:  {
    type: Date,
    default: Date.now
  },
  Timestamp:{ 
    type : Date, 
    default: Date.now 
  },
});

const model = mongoose.model<IStrategyDocument>('Strategy', StrategySchema);

export default model;