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

  get2(): InterfaceExample {
    return  {
      name: 'api name',
      massacre: 15,
    }
  }

  post(): void {
    console.log("post");
  }

  postUsedInStore(): void {
    console.log("postUsedInStore");
  }

  postAnother(): void {
    console.log("postAnother");
  }

  delete(): void {
    console.log("delete");
  }

  put(): void {
    console.log("put");
  }
}
