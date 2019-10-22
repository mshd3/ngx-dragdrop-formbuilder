import { Component } from "@angular/core";
import { InputType } from '../models/input-type.model';
import { Input } from '../models/input.model';

@Component({
    selector: 'builder-toolbox',
    styleUrls: ['builder-toolbox.component.scss'],
    template: `
    <div class="builder-toolbox-container">
        <mat-card>
            <mat-card-title>Element Toolbox</mat-card-title>
            <mat-card-content>
                <mat-chip-list *ngFor="let input of inputs" class="mat-chip-list-stacked" aria-orientation="vertical">
                    <mat-chip color="primary" selected draggable="true" (dragstart)="drag($event, input)">
                        <i class="material-icons">{{input.icon}}</i>
                        {{input.display}}
                    </mat-chip>
                </mat-chip-list>
            </mat-card-content>
        </mat-card>
    </div>
    `
})
export class BuilderToolboxComponent {
    inputs: Array<Input> = [
        new Input('Checkbox', 'check_box', InputType.checkbox),
        new Input('Date', 'calendar_today', InputType.date),
        new Input('Dropdown', 'keyboard_arrow_down', InputType.dropdown),
        new Input('Radio', 'radio_button_checked', InputType.radio),
        new Input('Text', 'text_format', InputType.text),
        new Input('Toggle', 'toggle_on', InputType.toggle),
    ];

    drag(event: DragEvent, input: Input): void {
        event.dataTransfer.setData('inputType', input.type.toString());
    }
}