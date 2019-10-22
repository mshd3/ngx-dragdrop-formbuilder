import { Component, Input } from "@angular/core";
import { ElementDate } from '../models/element-date.model';

@Component({
    selector: 'builder-element-date',
    styleUrls: ['../common/builder-common.scss'],
    template: `
        <mat-form-field>
            <input matInput [matDatepicker]="picker" placeholder="{{element.label}}" [ngModel]="element.defaultValue">
            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
        <span *ngIf="element.required" class="required">*</span>
    `
})
export class BuilderElementDateComponent {
    @Input() element: ElementDate;
}