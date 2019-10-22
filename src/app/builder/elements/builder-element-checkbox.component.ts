import { Component, Input } from "@angular/core";
import { ElementCheckbox } from '../models/element-checkbox.model';

@Component({
    selector: 'builder-element-checkbox',
    styleUrls: ['../common/builder-common.scss'],
    template: `
        <mat-checkbox color="primary" [ngModel]="element.defaultValue">{{element.label}}</mat-checkbox>
        <span *ngIf="element.required" class="required">*</span>
    `
})
export class BuilderElementCheckboxComponent {
    @Input() element: ElementCheckbox;
}