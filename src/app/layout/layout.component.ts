import {Component, ElementRef, Injector, OnDestroy, OnInit} from '@angular/core';

@Component({selector : 'app-layout',
  templateUrl : './layout.component.html'})
export class LayoutComponent implements OnInit, OnDestroy {

  constructor(protected elementRef : ElementRef, protected injector : Injector) {

  }

  ngOnDestroy() {

  }

  ngOnInit() {

  }

}
