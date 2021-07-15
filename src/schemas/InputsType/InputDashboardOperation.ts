import {Field, ID, InputType } from 'type-graphql';

@InputType()
class InputDashboardOperation {
  
  @Field()
    strategy?: string;
  @Field()  
    gainfinance?: number;
  @Field()
    lossfinance?: number;
  @Field()
    mediaGainFinance?: number;
  @Field()
    medialossFinance?: number;
  @Field()
    gainpoints?: number;
  @Field()
    losspoints?: number;
  @Field()
    mediaGainpoints?: number;
  @Field()
    medialosspoints?: number;
  @Field()
    spread?: number;
  @Field()
    porcentagemGainExpectedMinor?: number;
  @Field()
    porcentagemGainFull?: number;
  @Field()
    porcentagemGainExpectedBigger?: number;
  @Field()
    porcentagemStopExpectedMinor?: number;
  @Field()
    porcentagemStopFull?: number;
  @Field()
    porcentagemHits?: number;
  @Field()
    porcentagemStopExpectedBigger ?: number;
  @Field()
    averageGain?: number;
  @Field()
    averageStop?: number;
  @Field()
    averageOperation?: number;
  @Field()
    averageRiskGain?: number;
  @Field()
    trades?: number;
  @Field()
    histsAverage?: number;
  @Field()
    histsFull?: number;
  @Field()
    results?: number;
}

export default InputDashboardOperation;