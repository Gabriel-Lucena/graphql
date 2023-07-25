import { Customer } from './../dtos/models/customer-model';

import { Appointment } from './../dtos/models/appointment-model';
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";

import { Arg, Query, Mutation, Resolver, FieldResolver, Root} from "type-graphql";



@Resolver(() => Appointment)
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async appointments() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      }
    ];
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg('data') data: CreateAppointmentInput) {
      const appointment = {
        startsAt: data.startsAt,
        endsAt: data.endsAt,
      }

      return appointment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    console.log(appointment);

    return {
      name: "John Smith",
    }
  }
}