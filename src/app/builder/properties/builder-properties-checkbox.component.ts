import { Component, Input } from "@angular/core";
import { ElementCheckbox } from '../models/element-checkbox.model';

@Component({
    selector: 'builder-properties-checkbox',
    styleUrls: [
        '../common/builder-common.scss', 
        'builder-properties-common.scss'
    ],
    template: `
    <div class="builder-properties-container">
        <div class="property">
            <label>Label</label>
            <input type="text" [value]="element.label">
        </div>

        <div class="property">
            <label class="checkbox-container">Required
                <input type="checkbox">
                <span class="checkmark"></span>
            </label>
        </div>

        <div class="property">
            <label class="checkbox-container">Checked by default
                <input type="checkbox">
                <span class="checkmark"></span>
            </label>
        </div>
    </div>
    `
})
export class BuilderPropertiesCheckboxComponent {
    @Input() element: ElementCheckbox;
}