import {Component, ElementRef, EventEmitter, Injector, OnDestroy, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './user.service';
import {User} from '../domain/user/user';

@Component({selector : 'create-user',
  templateUrl : './create-user.component.html'})
export class CreateUserComponent implements OnInit, OnDestroy {

  public router : Router;
  public user: User;
  public name : string;
  public code : string;

  @Output()
  public doneEvent = new EventEmitter();


  constructor(protected elementRef : ElementRef, protected injector : Injector, protected userService : UserService) {
    this.router = injector.get(Router);

  }


  ngOnDestroy() {

  }

  ngOnInit() {

    this.user = new User();
  }


  public addUser() {
    this.user.name = this.name;
    this.user.code = this.code;

    this.userService.createUser(this.user).subscribe((result) => {
      if (result) {
        this.doneEvent.emit();
      }
    });

  }

}
