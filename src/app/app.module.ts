import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AbstractService} from './service/abstract.service';

const appRoutes : Routes = [
  {path : '', loadChildren : 'app/layout/layout.module#LayoutModule'},
  // {path : '**', redirectTo : '', pathMatch :'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AbstractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
