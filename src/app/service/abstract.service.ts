import {Injectable, Injector} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable()
export class AbstractService {

  protected http : HttpClientModule;

  constructor() {
  }

}
