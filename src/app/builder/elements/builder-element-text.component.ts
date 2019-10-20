import { Component, Input } from "@angular/core";
import { ElementText } from '../models/element-text.model';

@Component({
    selector: 'builder-element-text',
    styleUrls: ['../common/builder-common.scss'],
    template: `
    <div class="builder-element-text-container">
        <label>{{element.label}}</label>
        <input type="text">
        <span *ngIf="element.required" class="required">*</span>
    </div>
    `
})
export class BuilderElementTextComponent {
    @Input() element: ElementText;
}