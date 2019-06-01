import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Goal, ListService, Status } from '../list.service';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
    items: Array<Goal>;
    Status = Status;

    constructor(private listService: ListService) {
    }

    ngOnInit() {
      this.listService.initialize();
      this.items = this.listService.getList();
      console.log(this.items);
    }

    decorateText(index: number) {
      const item = this.listService.getItem(index);

      return item.status === Status.DONE ? 'line-through' : '';
    }

    onItemTap(args) {
      const i = args.index;
      this.listService.toggleStatus(i);
    }
}
