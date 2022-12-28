import { Directive, Injectable} from '@angular/core';
import {InterfaceExample} from '@whg/models';

@Injectable({ providedIn: 'root'})
export class CoreService {
  get(): InterfaceExample {
    return {
      name: 'name',
      massacre: 10,
    }
  }
}


@Directive({selector: '[autoVersioningExCore]', standalone: true})
export class CoreDirective {}

