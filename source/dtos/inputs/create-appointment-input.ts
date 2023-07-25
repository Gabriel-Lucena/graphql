import  { Field, InputType } from "type-graphql";
import { IsString, IsDate} from "class-validator"

@InputType()
export class CreateAppointmentInput {
  @IsString()
  @Field()
  customerId: string;

  @IsDate()
  @Field()
  startsAt: Date;
  
  @IsDate()
  @Field()
  endsAt: Date;
}