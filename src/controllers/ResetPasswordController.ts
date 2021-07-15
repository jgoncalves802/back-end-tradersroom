import { Arg , Resolver, Mutation  } from "type-graphql";
import { hash } from 'bcryptjs';
import dbUser from '../database/models/users';



@Resolver()
class ResetPasswordController {
 
  @Mutation(returns => Boolean)
  async resetPassword(
    @Arg("password") password: string,
    @Arg("password_confirmation") password_confirmation: string,
    @Arg("resetToken") resetToken: string,
  ){
    if (password !== password_confirmation) {
      throw new Error(`Your passwords don't match`);
    }

    const user = await dbUser.findOne({
      resetToken: resetToken,
      resetTokenExpiry: {$gt: Date.now()}
    });

    if (!user)
        throw new Error(
          "Your password reset token is either invalid or expired."
    );

    const hashedPassword = await hash(password, 12);
    
    const result = await dbUser.findByIdAndUpdate(
      {_id: user._id},
      {
        password: hashedPassword, resetToken: null,
        resetTokenExpiry: null,
      }); 
    
    return true; 
  }
}

export default ResetPasswordController;

