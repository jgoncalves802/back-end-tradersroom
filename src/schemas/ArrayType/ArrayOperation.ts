import {Field, InputType } from 'type-graphql';
import InputOperation from '../InputsType/InputOperation';

@InputType()
class ArrayOperation {
  @Field(type => [InputOperation])
  operation: InputOperation[];
}

export default ArrayOperation;