import { Component, Input } from "@angular/core";
import { ElementRadio } from '../models/element-radio.model';

@Component({
    selector: 'builder-properties-radio',
    styleUrls: [
        '../common/builder-common.scss', 
        'builder-properties-common.scss'
    ],
    template: `
    <div class="builder-properties-container">
        <div class="property">
            <label>Label</label>
            <input type="text" [(ngModel)]="element.label">
        </div>

        <div class="property">
            <label class="checkbox-container">Required
                <input type="checkbox" [(ngModel)]="element.required">
                <span class="checkmark"></span>
            </label>
        </div>

        <div class="property">
            <label>Options</label>
            <input type="text" [(ngModel)]="currentOption" (keyup.enter)="clickAddOption(optionInput)" #optionInput>
            <i class="material-icons add-option" (click)="clickAddOption(optionInput)">add_circle</i>

            <div *ngFor="let option of element.options; let i = index" class="option">{{option}}
                <i class="material-icons remove-option" (click)="clickRemoveOption(i)">cancel</i>
            </div>
        </div>
    </div>
    `
})
export class BuilderPropertiesRadioComponent {
    @Input() element: ElementRadio;

    clickAddOption(optionDisplay: HTMLInputElement): void {
        if (!optionDisplay.value) { return; }

        this.element.options.push(optionDisplay.value);
        optionDisplay.value = null;
    }

    clickRemoveOption(optionIndex: number): void {
        this.element.options.splice(optionIndex, 1);
    }
}