import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll({});
  }

  async getUserById(id: number): Promise<User> {
    return this.userRepository.findById({ id: id });
  }

  // Other methods for creating, updating, and deleting users
}
