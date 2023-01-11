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

  post(): void {
    console.log("post");
  }

  delete(): void {
    console.log("delete");
  }
}
