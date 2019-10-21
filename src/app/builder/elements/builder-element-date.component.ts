import { Component, Input } from "@angular/core";
import { ElementDate } from '../models/element-date.model';

@Component({
    selector: 'builder-element-date',
    styleUrls: ['../common/builder-common.scss'],
    template: `
    <div class="builder-element-date-container">
        <label>{{element.label}}</label>
        <input type="date" [value]="element.defaultValue">
        <span *ngIf="element.required" class="required">*</span>
    </div>
    `
})
export class BuilderElementDateComponent {
    @Input() element: ElementDate;
}