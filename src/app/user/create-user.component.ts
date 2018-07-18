import {Component, ElementRef, EventEmitter, Injector, OnDestroy, OnInit, Output} from '@angular/core';
import {UserService} from './user.service';
import {User} from '../domain/user/user';
import {AbstractComponent} from '../abstract.component';

@Component({selector : 'create-user',
  templateUrl : './create-user.component.html'})
export class CreateUserComponent extends AbstractComponent implements OnInit, OnDestroy {

  public user: User;
  public name : string;
  public code : string;

  @Output()
  public doneEvent = new EventEmitter();

  constructor(protected elementRef : ElementRef,
              protected injector : Injector,
              protected userService : UserService) {
    super(elementRef, injector);
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
