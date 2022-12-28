import {Injectable} from '@angular/core';
import {InterfaceExample} from '@whg/models';

@Injectable({ providedIn: 'root'})
export class ApiService {
  get(): InterfaceExample {
    return  {
      name: 'api name',
      massacre: 15,
    }
  }
}
