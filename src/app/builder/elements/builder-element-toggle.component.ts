import { Component, Input } from "@angular/core";
import { ElementToggle } from '../models/element-toggle.model';

@Component({
    selector: 'builder-element-toggle',
    styleUrls: ['../common/builder-common.scss'],
    template: `
    <div class="builder-element-toggle-container">
        <label class="toggle-container">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
        {{element.label}}
    </div>
    `
})
export class BuilderElementToggleComponent {
    @Input() element: ElementToggle;
}