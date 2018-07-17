import {Component, ElementRef, Injector, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../domain/user/user';

@Component({selector : 'app-user-detail',
  templateUrl : './user-detail.component.html'})
export class UserDetailComponent implements OnInit, OnDestroy {

  public user: User;
  public userId : string;
  public router : Router;

  constructor(protected elementRef : ElementRef,
              protected injector : Injector,
              protected userService : UserService,
              protected activatedRoute : ActivatedRoute,

              ) {
    this.router = injector.get(Router);
  }


  ngOnDestroy() {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.userId = params['id'];
        this._getUserDetail(this.userId);
      }
    });
  }

  public deleteUser(id) {
    this.userService.deleteUser(id).subscribe((result: User)=> {
      console.info('result --> ', result);
      this.router.navigate(['']);
    });

  }

  /**
   * Get user detail information
   * @param {string} userId
   * @private
   */
  private _getUserDetail(userId : string ) : void {
    this.userService.getUserDetail(userId).subscribe((result: User)=> {
      console.info('result --> ', result);
      this.user = result;
    });
  }

  // public getUsers () : void {
  //   this.userService.getUsers().subscribe((result: User)=> {
  //     console.info('result --> ', result);
  //     this.users = result;
  //   });
  // }

  // public getUser(user) : void {
  //   user.id
  //
  // }

}
