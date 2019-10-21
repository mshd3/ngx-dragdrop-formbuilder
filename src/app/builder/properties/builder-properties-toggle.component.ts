import { Component, Input } from "@angular/core";
import { ElementToggle } from '../models/element-toggle.model';

@Component({
    selector: 'builder-properties-toggle',
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

        <label class="toggle-container">
            <input type="checkbox" [(ngModel)]="element.defaultValue">
            <span class="slider round"></span>
        </label>
        On by default
    </div>
    `
})
export class BuilderPropertiesToggleComponent {
    @Input() element: ElementToggle;
}