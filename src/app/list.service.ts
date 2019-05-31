import { Injectable, OnInit } from '@angular/core';

export enum Status {
  DONE,
  UNDONE
}

export class Goal {
  constructor(public text: string, public status = Status.UNDONE) { }
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
    item.status = Math.abs(item.status - 1);
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
