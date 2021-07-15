import {Field, InputType } from 'type-graphql';
import InputStrategy from '../InputsType/InputStrategy';

@InputType()
class ArrayStrategy {
  @Field(type => [InputStrategy])
  strategy: InputStrategy[];
}

export default ArrayStrategy;