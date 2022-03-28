import { Injectable } from '@angular/core';

@Injectable()
export class IdeasListService {
  subjectList = [];
  environmentList = [];

  randomItemFromList(list: Array<any>): string {
    const randomItem = list[Math.floor(Math.random() * list.length)];
    //check if pair exist
    return randomItem;
  }
}
