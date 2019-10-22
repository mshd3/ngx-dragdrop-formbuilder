import { Component, Input } from "@angular/core";
import { ElementText } from '../models/element-text.model';
import { ElementDropdown } from '../models/element-dropdown.model';

@Component({
    selector: 'builder-element-dropdown',
    styleUrls: ['../common/builder-common.scss'],
    template: `
        <mat-form-field>
            <mat-label>{{element.label}}</mat-label>
            <mat-select>
                <mat-option *ngFor="let option of element.options" [value]="option">
                {{option}}
                </mat-option>
            </mat-select>
        </mat-form-field>
        <span *ngIf="element.required" class="required">*</span>
    `
})
export class BuilderElementDropdownComponent {
    @Input() element: ElementDropdown;
}