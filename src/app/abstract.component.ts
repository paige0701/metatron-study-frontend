import {ElementRef, Injector, OnChanges, OnDestroy, OnInit} from '@angular/core';
import * as $ from "jquery";
import {Router} from '@angular/router';

export class AbstractComponent implements OnInit, OnDestroy {

  public router : Router;

  constructor(protected elementRef: ElementRef,
              protected injector: Injector) {
    this.router = injector.get(Router);
  }

  ngOnInit() {

  }


  ngOnDestroy() {

  }

}
