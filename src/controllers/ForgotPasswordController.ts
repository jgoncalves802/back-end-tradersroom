import { Arg , Resolver, Mutation  } from "type-graphql";
import randomBytes from 'randomBytes';
import { sendEmail } from '../utils/sendEmail';
import {promisify} from 'util';
import dbUser from '../database/models/users'; 


@Resolver()
class ForgotPasswordController {
 
  @Mutation(returns => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
  ){
    const user: any = await dbUser.findOne({email: email});
    const name  = user.firstName;
   
    if(!user){ 
      throw new Error("No user found with that email.");
    }
    const randomBytesPromisified = promisify(randomBytes);
    const resetToken = (await randomBytesPromisified(20)).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000;

    const result = await dbUser.findOneAndUpdate(
      {email: email},
      {
        $set:{ resetToken: resetToken, resetTokenExpiry: resetTokenExpiry }
      }
    );
    
    await sendEmail(email, `http://localhost:3000/reset-password/${resetToken}`, name)

    return true; 
      
  }
}

export default ForgotPasswordController;

