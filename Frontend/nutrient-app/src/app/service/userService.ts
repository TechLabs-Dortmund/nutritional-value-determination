import {Injectable} from '@angular/core';
import { User } from '../login/user';
import { UserRequest } from '../models/userRequest';
import { UserRepository } from '../repository/user.repository';


@Injectable()
export class UserService {

  private _UserRepository: UserRepository;

  constructor(UserRepository: UserRepository) {
    this._UserRepository = UserRepository;
  }

  public async getUserByName(email: string): Promise<User> {
    const user: User = await this._UserRepository.getUserByName(email);

    return user;
  }


  public async createUser(UserToCreate: UserRequest): Promise<User> {
    const createdUser: User = await this._UserRepository.createUser(UserToCreate);

    return createdUser;
  }

  public async updateUser(id: number, User: UserRequest): Promise<User> {
    const updatedUser: User = await this._UserRepository.updateUser(id, User);

    return updatedUser;
  }

  public async deleteUser(id: number): Promise<User> {
    const deletedUser: User = await this._UserRepository.deleteUser(id);

    return deletedUser;
  }


}