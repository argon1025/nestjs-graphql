import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { PrismaService } from 'lib/prisma';
import { UserModel } from 'src/user/model/user.model';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => UserModel)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.prismaService.user.findUnique({ where: { id } });
  }
}
