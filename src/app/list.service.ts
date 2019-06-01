import { Injectable, OnInit } from '@angular/core';

export enum Status {
  DONE,
  UNDONE
}

export class Goal {
  readonly verb: string;
  readonly initCount: number;
  readonly noun: string;
  count: number;

  constructor(public text: string, public status = Status.UNDONE) {
    const strArr = text.split(' ');
    const wordsArr: Array<Array<string>> = [];
    let num: number;
    let count = 0;
    wordsArr.push([]);
    strArr.forEach(str => {
      if (isNaN(Number(str))) {
        wordsArr[count].push(str);
      } else {
        wordsArr.push([]);
        count++;
        num = JSON.parse(str);
      }
    });

    this.verb = wordsArr[0].join(' ');
    this.initCount = this.count = num;
    this.noun = wordsArr[1].join(' ');
  }
}

const goals = [
  'Read 3 articles',
  'Drink 8 glasses of water',
  'Listen to 1 audiobook chapter'
];

@Injectable({
  providedIn: 'root'
})
export class ListService {

  items: Array<Goal> = [];

  constructor() { }

  initialize() {
    goals.forEach(goal => {
      this.items.push(new Goal(goal));
    });
  }

  toggleStatus(index: number) {
    const item = this.items[index];
    if (item.count > 1) {
      item.count--;
    } else {
      item.count--;
      item.status = Math.abs(item.status - 1);
      if (item.status === Status.UNDONE) {
        item.count = item.initCount;
      }
    }

    item.text = `${item.verb} ${item.count} ${item.noun}`;

    console.log(item);
  }

  setToDone(index: number) {
    this.items[index].status = Status.DONE;
  }

  addItem(goal: string) {
    this.items.push(new Goal(goal));
  }

  getItem(index: number) {
    return this.items[index];
  }

  getList() {
    return this.items;
  }
}
