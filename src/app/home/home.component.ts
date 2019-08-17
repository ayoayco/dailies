import { Component, OnInit } from '@angular/core';
import { EventData } from 'tns-core-modules/data/observable';
import { ListService } from '../list.service';
import { DialogService } from '../dialog.service';
import { PromptResult } from 'tns-core-modules/ui/dialogs/dialogs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Dailies';
  tagline = 'Build habits. Claim rewards.';

  constructor(private listService: ListService, private dialogService: DialogService) { }

  ngOnInit() {
  }

  addTask(args: EventData) {
    this.dialogService.displayPromptDialog().then((result: PromptResult) => {
      if (result.result && result.text) {
        this.listService.addItem(result.text);
      }
    });
  }

}
