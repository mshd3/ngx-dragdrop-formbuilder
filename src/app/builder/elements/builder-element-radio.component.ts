import { Component, Input } from "@angular/core";
import { ElementRadio } from '../models/element-radio.model';

@Component({
    selector: 'builder-element-radio',
    styleUrls: ['../common/builder-common.scss'],
    template: `
    <div class="builder-element-radio-container">
        <label>{{element.label}}</label>
        <label *ngIf="!element.options || !element.options.length">(no radio options set)</label>
        <span *ngFor="let option of element.options">
            <input type="radio" [name]="element.id" [value]="option">{{option}}
        </span>
        <span *ngIf="element.required" class="required">*</span>
    </div>
    `
})
export class BuilderElementRadioComponent {
    @Input() element: ElementRadio;
}