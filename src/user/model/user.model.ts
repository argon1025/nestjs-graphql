import { Field, HideField, Int, ObjectType } from '@nestjs/graphql';
import { User } from '@prisma/client';

@ObjectType()
export class UserModel {
  @Field(() => Int)
  id: User['id'];

  name: User['name'];

  email: User['email'];

  @Field({ nullable: true })
  createdAt: User['createdAt'];

  @HideField()
  password: User['password'];

  @HideField()
  deletedAt: User['deletedAt'];
}
