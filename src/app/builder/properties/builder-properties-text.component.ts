import { Component, Input } from "@angular/core";
import { ElementText } from '../models/element-text.model';

@Component({
    selector: 'builder-properties-text',
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
    </div>
    `
})
export class BuilderPropertiesTextComponent {
    @Input() element: ElementText;
}