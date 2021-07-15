import { Mutation, Resolver, Arg} from "type-graphql";
import dbUser from '../database/models/users'; 
import { sign } from 'jsonwebtoken';
import { compare} from 'bcryptjs';
import Auth from "../schemas/Auth";
import AuthConfig from '../config/auth';

@Resolver(Auth)
class AuthController {
  
  @Mutation(returns => Auth)
  async signIn(
    @Arg("email") email: string,
    @Arg("password") password: string,
  ){
     const user = await dbUser.findOne({ email });
    
     if (!user) {
        throw new Error('Incorrect email/password combination');
      }

    const passwordMatched = await compare(password, user.password);
    
    if (!passwordMatched) {

      throw new Error('Incorrect email/password combination');
    }
    const { secret, expiresIn } = AuthConfig.jwt
    const  token = sign({}, secret, {
      subject: `"${user._id}"`,
      expiresIn
    });

    return {
      token,
      user
    }; 
  }
}

export default AuthController;