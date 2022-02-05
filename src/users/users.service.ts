import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll() {
    const users = await this.usersRepository.find();
return users.map(User.toResponse);
  }

  async findByLogin(login:  string) {
    const user = await this.usersRepository.findOne({ login });

    if (!user) {
      return null;
    }

    return user;
  }
  
  async findOne(id: number | string) {
    const user = await this.usersRepository.findOne(id);
    return User.toResponse(user);
  }
  
  async create(createUserDto: CreateUserDto) {
    const user =  await this.usersRepository.save(createUserDto);
    return User.toResponse(user);
  }

  async update(id: number | string, updateUserDto: UpdateUserDto) {
    const user =  await this.usersRepository.findOne(id);
    user.login = updateUserDto.login;
  user.name = updateUserDto.name;
  user.password = updateUserDto.password;
  await this.usersRepository.save(user);
    return User.toResponse(user) 
  }

  async remove(id: number | string) {
    Boolean((await this.usersRepository.delete(id)).affected);
  }
}
