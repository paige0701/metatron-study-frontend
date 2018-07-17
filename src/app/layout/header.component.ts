import {Component, ElementRef, Injector, OnDestroy, OnInit} from '@angular/core';

@Component({selector : 'app-header',
            templateUrl : './header.component.html'})
export class HeaderComponent implements OnInit, OnDestroy {


  constructor(protected elementRef : ElementRef, protected injector : Injector) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
