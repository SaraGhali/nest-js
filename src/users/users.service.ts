import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  // ========== IN-MEMORY STORAGE ==========
  private users: User[] = [];
  private idCounter = 1;

  // ========== CREATE ==========
  create(createUserDto: CreateUserDto, avatarFilename?: string): User {
    const newUser: User = {
      id: this.idCounter++,
      ...createUserDto,
      avatar: avatarFilename || undefined,
    };
    this.users.push(newUser);
    return newUser;
  }

  // ========== READ ALL ==========
  findAll(): User[] {
    return this.users;
  }

  // ========== READ ONE ==========
  findOne(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // ========== UPDATE ==========
  update(id: number, updateUserDto: UpdateUserDto, avatarFilename?: string): User {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Merge old data with new data
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updateUserDto,
      ...(avatarFilename && { avatar: avatarFilename }),
    };

    return this.users[userIndex];
  }

  // ========== DELETE ==========
  remove(id: number): { message: string } {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.users.splice(userIndex, 1);
    return { message: `User with ID ${id} has been deleted` };
  }
}