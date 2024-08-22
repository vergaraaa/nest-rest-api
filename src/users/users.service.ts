import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  getUsers() {
    return this.prismaService.user.findMany();
  }

  createUser(user: CreateUserDto) {
    return this.prismaService.user.create({ data: user });
  }
}
