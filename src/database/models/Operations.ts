import mongoose, {Document, Schema} from 'mongoose';

interface ItableData{
  id: Number;
  editing?: string;
}
export interface IOperation {
  tableData?: ItableData;
  date?: string;
  value?: Number;
  __typename?: string;
  name?: string;
  id?: string;
  _id: string;
  Dateopen: number | Date;
  Dateclose: number | Date;
  active: string;
  open: string;
  close: string;
  time_operation: string;
  qtd_buy: string;
  qtd_sell: string;
  side: string;
  price_buy: string;
  price_sell: string;
  market_price: string;
  mep?: string;
  men?: string;
  averange?: string;
  result: string;
  result_por: string;  
  total: string;
  tet: string;
  stop?: string;
  target?: string;
  author: string;
  strategy?: string;

  }

  interface IOperationDocument extends Document  {
    active:string;
    open:string;
    close:string;
    time_operation:string;
    qtd_buy:string;
    qtd_sell:string;
    side:string;
    price_buy:string;
    price_sell:string;
    market_price:string;
    mep?: string;
    men?: string;
    averange?: string;
    result: string;
    result_por:string;    
    total:string;
    tet:string;
    stop?: string;
    target?: string;
    author: any;
    strategy?: string;
  }


const OperationSchema = new Schema<IOperationDocument>({
  active:{
    type: String,
    required: false,
  },
  open:{
    type: String,
    required: false,
  },
  close:{
    type: String,
    required: false,
  },
  time_operation:{
    type: String,
    required: false,
  },
  qtd_buy:{
    type: String,
    required: false,
  },
  qtd_sell:{
    type: String,
    required: false,
  },
  side:{
    type: String,
    required: false,
  },
  price_buy:{
    type: String,
    required: false,
  },
  price_sell:{
    type: String,
    required: false,
  },
  market_price:{
    type: String,
    required: false,
  },
  mep:{
    type: String,
    required: false,
  },
  men:{
    type: String,
    required: false,
  },
  averange:{
    type: String,
    required: false,
  },
  result:{
    type: String,
    required: false,
  },
  result_por:{
    type: String,
    required: false,
  },
  total:{
    type: String,
    required: false,
  },
  tet:{
    type: String,
    required: false,
  },
  stop:{
    type: String,
    required: false,
  },
  target:{
    type: String,
    required: false,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  strategy: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Strategy',
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt:  {
    type: Date,
    default: Date.now,
  },
  Timestamp:{ 
    type : Date, 
    default: Date.now ,
  },
});

const model = mongoose.model<IOperationDocument>('Operation', OperationSchema);

export default model;