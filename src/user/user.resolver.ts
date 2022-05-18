import { Query, Resolver } from '@nestjs/graphql';

import { PrismaService } from 'lib/prisma';
import { UserModel } from 'src/user/model/user.model';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [UserModel])
  async users() {
    return this.prismaService.user.findMany();
  }
}
