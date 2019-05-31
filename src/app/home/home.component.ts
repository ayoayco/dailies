import { Component, OnInit } from '@angular/core';
import { EventData } from 'tns-core-modules/data/observable';
import { Button } from 'tns-core-modules/ui/button';
import { ListService } from '../list.service';
import { prompt, PromptResult, PromptOptions, inputType, capitalizationType } from 'tns-core-modules/ui/dialogs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Dailies';
  tagline = 'Build habits. Claim rewards.';

  constructor(private listService: ListService) { }

  count: number;

  ngOnInit() {
    this.count = 0;
  }

  onTap(args: EventData) {
    this.displayPromptDialog();
  }

  displayPromptDialog() {
        // >> prompt-dialog-code
        /*
        import {
            prompt,
            PromptResult,
            PromptOptions,
            inputType,
            capitalizationType
        } from 'tns-core-modules/ui/dialogs';
        */
        const options: PromptOptions = {
            title: 'Add a goal',
            okButtonText: 'OK',
            cancelButtonText: 'Cancel',
            cancelable: true,
            inputType: inputType.text, // email, number, text, password, or email
            capitalizationType: capitalizationType.sentences // all. none, sentences or words
        };

        prompt(options).then((result: PromptResult) => {
          if (result.result && result.text) {
            this.listService.addItem(result.text);
          }
        });
        // << prompt-dialog-code
    }

}
