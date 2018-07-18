import {Component, ElementRef, Injector, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {User} from '../domain/user/user';
import {Router} from '@angular/router';

@Component({selector : 'app-user',
  templateUrl : './user.component.html'})
export class UserComponent implements OnInit, OnDestroy {

  public router : Router;
  public users: any;
  public isCreateUser : boolean = false;

  constructor(protected elementRef : ElementRef, protected injector : Injector, protected userService : UserService) {
    this.router = injector.get(Router);

  }


  ngOnDestroy() {

  }

  ngOnInit() {
    this.getUsers();
  }


  public getUsers () : void {
    this.userService.getUsers().subscribe((result: User)=> {
      this.users = result;
    });
  }

  public getUser(user) : void {

    this.router.navigate(['/user',user.id]);

  }

  public navigateToCreate() : void {
    this.isCreateUser = true;
  }

}
