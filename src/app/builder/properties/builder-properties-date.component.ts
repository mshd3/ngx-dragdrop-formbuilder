import { Component, Input } from "@angular/core";
import { ElementDate } from '../models/element-date.model';

@Component({
    selector: 'builder-properties-date',
    styleUrls: [
        '../common/builder-common.scss', 
        'builder-properties-common.scss'
    ],
    template: `
    <div class="builder-properties-container">
        <div class="property">
            <label>Label</label>
            <input type="text" [(ngModel)]="element.label">
        </div>

        <div class="property">
            <label class="checkbox-container">Required
                <input type="checkbox" [(ngModel)]="element.required">
                <span class="checkmark"></span>
            </label>
        </div>

        <div class="property">
            <label>Default date</label>
            <input type="date" [(ngModel)]="element.defaultValue">
        </div>
    </div>
    `
})
export class BuilderPropertiesDateComponent {
    @Input() element: ElementDate;
}