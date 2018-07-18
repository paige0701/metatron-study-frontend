import {Component, ElementRef, Injector, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {User} from '../domain/user/user';
import {AbstractComponent} from '../abstract.component';

@Component({selector : 'app-user',
  templateUrl : './user.component.html'})
export class UserComponent extends AbstractComponent implements OnInit, OnDestroy {

  public users: User[];
  public isCreateUser : boolean = false;

  constructor(protected elementRef : ElementRef,
              protected injector : Injector,
              protected userService : UserService) {
    super(elementRef, injector);
  }


  ngOnDestroy() {

  }

  ngOnInit() {
    this.getUsers();
  }

  /**
   * Get user list
   */
  public getUsers() : void {
    this.userService.getUsers().subscribe((result: User[])=> {
      this.users = result;
    });
  } // - getUsers

  /**
   * Navigate to detail page
   */
  public navigateToDetail(user : User) : void {
    this.router.navigate(['/user',user.id]);
  } // - navigateToDetail

  /**
   * Navigate to create user page
   */
  public navigateToCreate() : void {
    this.isCreateUser = true;
  } // - navigateToCreate

  /**
   * Delete user
   * @param {Event} event
   * @param {string} id
   */
  public deleteUser(event : Event, id : string) {
    event.stopImmediatePropagation();
    this.userService.deleteUser(id).subscribe(() => {
      this.getUsers();
    });

  } // - deleteUser

}
