import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {UserService} from './user.service';
import {CommonModule} from '@angular/common';
import {UserDetailComponent} from './user-detail.component';
import {CreateUserComponent} from './create-user.component';

const userRoutes : Routes = [
  {path : '' , component : UserComponent},
  {path : ':id' , component : UserDetailComponent}
];


@NgModule({
  imports : [RouterModule.forChild(userRoutes),CommonModule],
  declarations : [UserComponent, UserDetailComponent, CreateUserComponent
],
  providers : [UserService],

})
export class UserModule {

}
