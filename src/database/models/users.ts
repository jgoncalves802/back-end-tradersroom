import mongoose, {Document, Schema} from 'mongoose';

export interface IUser {
  _id: any;
  firstName: String;
  lastName: String;
  fullName: String;
  email: String;
  avatar?: String;
  password: String;
  active: Boolean;
  resetToken?: String | null;
  resetTokenExpiry?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
  }

interface IUserDocument extends Document {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    avatar: string;
    password: string;
    active: Boolean;
    }

const UserSchema = new Schema<IUserDocument>({  
  firstName:{
    type: String,
    required: true,
  },
  lastName:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    index: { unique: true }
  },
  password:{
    type: String,
    required: true,
  },
  avatar:{
    type: String,
  },
  active:{
    type: Boolean,
    required: true,
  },
  resetToken: {
    type: String,
    default: null
  },
  resetTokenExpiry: {
    type: Date,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt:  {
    type: Date,
    default: Date.now
  },
  Timestamp:{},
});


const model = mongoose.model<IUserDocument>('User', UserSchema);

export default model;