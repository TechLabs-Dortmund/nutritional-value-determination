import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';

import { User } from '../models/user';
import { UserRequest } from '../models/userRequest';

@Injectable({
  providedIn: 'root',
})
export class UserRepository {

  private _httpClient: HttpClient;

  private _userAPIUrl!: string;
  private _subdomain = 'userdata';

  constructor(
    httpClient: HttpClient,
  ) {
    this._httpClient = httpClient;
    this._userAPIUrl = 'https://localhost:5001';
  }

  public async getUserByName(name: string): Promise<User> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('accept', 'application/json');

    const user: User = await this._httpClient.get<User>(
      `${this._userAPIUrl}/${this._subdomain}/${name}`,
      {headers: headers},
    )
      .toPromise();

    return user;
  }


  public async updateUser(id: number, user: UserRequest): Promise<User> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json');

    const updateduser: User = await this._httpClient.put<User>(
      `${this._userAPIUrl}/${this._subdomain}/${id}`,
      user,
      {headers: headers},
    )
      .toPromise();
    return updateduser;
  }

  public async createUser(userToCreate: UserRequest): Promise<User> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json');

    const createduser: User = await this._httpClient
      .post<User>(
      `${this._userAPIUrl}/${this._subdomain}/${userToCreate}`,
      {headers: headers},
    )
      .toPromise();

    return createduser;
  }

  public async deleteUser(id: number): Promise<User> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('accept', 'application/json');

    const deleteduser: User = await this._httpClient
      .delete<User>(
      `${this._userAPIUrl}/${this._subdomain}/${id}`,
      {headers: headers},
    )
      .toPromise();

    return deleteduser;
  }

}
