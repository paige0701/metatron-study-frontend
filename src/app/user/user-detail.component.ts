import {Component, ElementRef, Injector, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../domain/user/user';
import {AbstractComponent} from '../abstract.component';

@Component({selector : 'app-user-detail',
  templateUrl : './user-detail.component.html'})
export class UserDetailComponent extends AbstractComponent implements OnInit, OnDestroy {

  public user: User;
  public userId : string;

  constructor(protected elementRef : ElementRef,
              protected injector : Injector,
              protected userService : UserService,
              protected activatedRoute : ActivatedRoute,
              ) {
    super(elementRef, injector);
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

  /**
   * Delete user
   * @param {string} id
   * @private
   */
  public deleteUser(id : string) {
    this.userService.deleteUser(id).subscribe(()=> {
      this.router.navigate(['']);
    });

  }

  /**
   * Get user detail information
   * @param {string} userId
   * @private
   */
  private _getUserDetail(id : string ) : void {
    this.userService.getUserDetail(id).subscribe((result: User)=> {
      this.user = result;
    });
  }


}
