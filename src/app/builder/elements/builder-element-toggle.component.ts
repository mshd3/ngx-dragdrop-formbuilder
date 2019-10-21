import { Component, Input } from "@angular/core";
import { ElementToggle } from '../models/element-toggle.model';

@Component({
    selector: 'builder-element-toggle',
    styleUrls: ['../common/builder-common.scss'],
    template: `
    <div class="builder-element-toggle-container">
        <label class="toggle-container">
            <input type="checkbox" [checked]="element.defaultValue">
            <span class="slider round"></span>
        </label>
        {{element.label}}
        <span *ngIf="element.required" class="required">*</span>
    </div>
    `
})
export class BuilderElementToggleComponent {
    @Input() element: ElementToggle;
}