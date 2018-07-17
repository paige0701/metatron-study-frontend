import {Component, ElementRef, Injector, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './user.service';

@Component({selector : 'app-create-user',
  templateUrl : './create-user.component.html'})
export class CreateUserComponent implements OnInit, OnDestroy {

  public router : Router;
  public users: any;

  constructor(protected elementRef : ElementRef, protected injector : Injector, protected userService : UserService) {
    this.router = injector.get(Router);

  }


  ngOnDestroy() {

  }

  ngOnInit() {
  }


}
