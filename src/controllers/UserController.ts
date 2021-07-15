import { Arg , Resolver, Query, Mutation, Authorized  } from "type-graphql";
import User from '../schemas/users';
import InputUsers from '../schemas/InputsType/InputUsers';
import dbUser from '../database/models/users'; 
import { hash } from 'bcryptjs';

@Resolver(User)
class UserController {
  @Authorized()
  @Query(returns => [User], { name:'users' })
  async find() {
    const users = await dbUser.find().select(['_id','firstName','lastName', 'avatar', 'email', 'password', 'active' ]);
    return users;
  }
  
  @Authorized()
  @Query(returns => User, { name:'user' })
  async findById(
    @Arg("id") id: String
  ) {
    const user = await dbUser.findById(id);
    if(!user) {
      throw new Error('User does not exists');
    }
    return user;
  }
  
  @Mutation(returns => User, { name:'createUser' })
  async create(
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("avatar") avatar: string,
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Arg("active") active: Boolean,
  ){

    const hashedPassword = await hash(password, 12);
    
    const user = await dbUser.create({firstName, lastName, avatar, email, password:hashedPassword, active});
    
    return user; 
  }

  @Authorized()
  @Mutation(returns => User)
  async updateUser(
    @Arg("id") id: string,
    @Arg("data") data: InputUsers,
  ){
     let userId = dbUser.findById(id);

    if (!userId){
      throw new Error('User does not exists');
    }
    const {password,...result} = data

    const hashedPassword = await hash(password, 12);

    const user = await dbUser.findByIdAndUpdate(id, {password:hashedPassword, ...result}, {new: true});  
    
    return user;
  }

  @Authorized()
  @Mutation(returns => Boolean)
  async deleteUser(
    @Arg("id") id: string,
  ){
    
    let idUser = dbUser.findById(id);

    if (!idUser){
      throw new Error('User does not exists');
    }
    return !!(await dbUser.findByIdAndDelete(id))
  }
}

export default UserController;

