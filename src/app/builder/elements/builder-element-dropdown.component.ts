import { Component, Input } from "@angular/core";
import { ElementText } from '../models/element-text.model';
import { ElementDropdown } from '../models/element-dropdown.model';

@Component({
    selector: 'builder-element-dropdown',
    styleUrls: ['../common/builder-common.scss'],
    template: `
    <div class="builder-element-dropdown-container">
        <label>{{element.label}}</label>
        <select>
            <option *ngFor="let option of element.options" [value]="option[1]">{{element[0]}}</option>
        </select>
        <span *ngIf="element.required" class="required">*</span>
    </div>
    `
})
export class BuilderElementDropdownComponent {
    @Input() element: ElementDropdown;
}