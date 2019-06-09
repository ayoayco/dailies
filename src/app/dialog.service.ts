import { Injectable } from '@angular/core';
import { prompt, PromptResult, PromptOptions, inputType, capitalizationType } from 'tns-core-modules/ui/dialogs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  displayPromptDialog(): Promise<PromptResult> {
    const options: PromptOptions = {
        title: 'Add a goal',
        okButtonText: 'OK',
        cancelButtonText: 'Cancel',
        cancelable: true,
        inputType: inputType.text,
        capitalizationType: capitalizationType.sentences
    };

    return prompt(options);
  }


}
