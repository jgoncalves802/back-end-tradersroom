import { AuthChecker } from 'type-graphql';
import { verify } from 'jsonwebtoken';
import AuthConfig from '../config/auth';


interface Context {
  token?: string;
}

const AuthenticationAssurance: AuthChecker<Context> = ({ context : Context }): boolean => {
  const authHeader = Context.token;
  
  if(!authHeader){
    return false;
  }
  const [, token] = authHeader.split(' ');

  try{
      const decoded = verify(token, AuthConfig.jwt.secret)
      return !!decoded;
  } catch{
    return false;
  }
}

export default AuthenticationAssurance;