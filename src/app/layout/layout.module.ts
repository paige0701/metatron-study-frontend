import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {LayoutComponent} from './layout.component';
import {RouterModule, Routes} from '@angular/router';

const layoutRoutes : Routes = [
  {path : '', component : LayoutComponent,
  children : [
    {path : '', redirectTo : 'user', pathMatch : 'full'},
    {path : 'user', loadChildren : 'app/user/user.module#UserModule'}
  ]}
];


@NgModule({
  imports : [RouterModule.forChild(layoutRoutes)],
  declarations : [

    HeaderComponent,
    FooterComponent,
    LayoutComponent],
  providers : [],

})
export class LayoutModule {

}
