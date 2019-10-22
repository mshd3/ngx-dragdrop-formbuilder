import { Component, Input } from "@angular/core";
import { ElementRadio } from '../models/element-radio.model';

@Component({
    selector: 'builder-element-radio',
    styleUrls: ['../common/builder-common.scss'],
    template: `
        <label id="example-radio-group-label">{{element.label}}</label>
        <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group" color="primary">
            <mat-radio-button class="example-radio-button" *ngFor="let option of element.options" [value]="option">
                {{option}}
            </mat-radio-button>
        </mat-radio-group>
        <span *ngIf="element.required" class="required">*</span>
    `
})
export class BuilderElementRadioComponent {
    @Input() element: ElementRadio;
}