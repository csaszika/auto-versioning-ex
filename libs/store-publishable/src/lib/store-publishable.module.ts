import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from '@whg/api';

@NgModule({
  imports: [CommonModule],
})
export class StorePublishableModule {}

@NgModule({
  imports: [CommonModule],
})
export class NewStorePublishableModule {
  constructor(private readonly service: ApiService) {
    service.postUsedInStore();
  }
}

@NgModule({
  imports: [],
})
export class NewestStorePublishableModule {}
