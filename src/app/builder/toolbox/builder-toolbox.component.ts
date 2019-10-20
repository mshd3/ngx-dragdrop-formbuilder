import { Component } from "@angular/core";
import { InputType } from '../models/input-type.model';
import { Input } from '../models/input.model';

@Component({
    selector: 'builder-toolbox',
    styleUrls: ['builder-toolbox.component.scss'],
    template: `
    <div class="builder-toolbox-container">
        <header>Toolbox</header>
        <section>
            <div *ngFor="let input of inputs; let i = index" class="input-container" draggable="true" (dragstart)="drag($event, input)">
                <div class="input">
                    <i class="material-icons">{{input.icon}}</i>
                    <span class="display">{{input.display}}</span>
                    <i class="material-icons drag">drag_indicator</i>
                </div>
                <hr *ngIf="i < inputs.length - 1">
            </div>
        </section>
    </div>
    `
})
export class BuilderToolboxComponent {
    inputs: Array<Input> = [
        new Input('Checkbox', 'check_box', InputType.checkbox),
        new Input('Date', 'calendar_today', InputType.date),
        new Input('Dropdown', 'check_box', InputType.dropdown),
        new Input('Radio', 'radio_button_checked', InputType.radio),
        new Input('Text', 'text_format', InputType.text),
        new Input('Toggle', 'toggle_on', InputType.toggle),
    ];

    drag(event: DragEvent, input: Input): void {
        event.dataTransfer.setData('inputType', input.type.toString());
    }
}