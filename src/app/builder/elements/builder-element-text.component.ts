import { Component, Input } from "@angular/core";
import { ElementText } from '../models/element-text.model';

@Component({
    selector: 'builder-element-text',
    styleUrls: ['../common/builder-common.scss'],
    template: `
        <mat-form-field class="example-form-field">
            <input matInput type="text" placeholder="{{element.label}}" [(ngModel)]="value">
            <button mat-button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="value=''">
                <mat-icon>close</mat-icon>
            </button>
        </mat-form-field>
        <span *ngIf="element.required" class="required">*</span>
    `
})
export class BuilderElementTextComponent {
    @Input() element: ElementText;

    value: string;
}