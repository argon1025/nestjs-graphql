import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '@prisma/client';

@ObjectType()
export class UserModel {
  // eslint-disable-next-line prettier/prettier
  @Field(() => Int)
  id: User['id'];

  @Field(() => String)
  name: User['name'];

  @Field(() => String)
  email: User['email'];

  password: User['password'];

  @Field(() => Date, { nullable: true })
  createdAt: User['createdAt'];

  deletedAt: User['deletedAt'];
}
