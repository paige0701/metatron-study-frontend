import {AbstractService} from '../service/abstract.service';
import {Injectable, Injector} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../domain/user/user';

@Injectable()
export class UserService extends AbstractService {


  constructor (protected injector : Injector, protected http: HttpClient) {
    super();
  }

  public getUsers () {

    return this.http.get<User>('http://localhost:8080/api/users')

  }

  public getUserDetail (id : string) {

    return this.http.get<User>('http://localhost:8080/api/users/'+ id)

  }

  public deleteUser (id : string) {
    return this.http.delete('http://localhost:8080/api/users/'+ id)
  }
}
