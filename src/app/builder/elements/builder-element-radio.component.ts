import { Component, Input } from "@angular/core";
import { ElementRadio } from '../models/element-radio.model';

@Component({
    selector: 'builder-element-radio',
    styleUrls: ['../common/builder-common.scss'],
    template: `
    <div class="builder-element-radio-container">
        <label *ngIf="!element.options || !element.options.length">No radio options set</label>
        <input *ngFor="let option of options" type="radio" [name]="element.id" [value]="option[1]">{{option ? option[0] : null}}
        <span *ngIf="element.required" class="required">*</span>
    </div>
    `
})
export class BuilderElementRadioComponent {
    @Input() element: ElementRadio;
}