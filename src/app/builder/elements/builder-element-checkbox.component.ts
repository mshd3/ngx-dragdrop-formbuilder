import { Component, Input } from "@angular/core";
import { ElementCheckbox } from '../models/element-checkbox.model';

@Component({
    selector: 'builder-element-checkbox',
    styleUrls: ['../common/builder-common.scss'],
    template: `
    <div class="builder-element-checkbox-container">
        <label class="checkbox-container">{{element.label}}
            <input type="checkbox" [checked]="element.defaultValue">
            <span class="checkmark"></span>
            <span *ngIf="element.required" class="required">*</span>
        </label>
    </div>
    `
})
export class BuilderElementCheckboxComponent {
    @Input() element: ElementCheckbox;
}