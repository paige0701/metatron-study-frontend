import {Component, ElementRef, Injector, OnDestroy, OnInit} from '@angular/core';

@Component({selector : 'app-footer',
  templateUrl : './footer.component.html'})
export class FooterComponent implements OnInit, OnDestroy {

  constructor(protected elementRef : ElementRef, protected injector : Injector) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
