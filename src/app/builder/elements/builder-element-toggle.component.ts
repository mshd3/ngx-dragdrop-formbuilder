import { Component, Input } from "@angular/core";
import { ElementToggle } from '../models/element-toggle.model';

@Component({
    selector: 'builder-element-toggle',
    styleUrls: ['../common/builder-common.scss'],
    template: `
        <mat-slide-toggle class="example-margin" color="primary" [checked]="element.defaultValue">
            {{element.label}}
        </mat-slide-toggle>
    `
})
export class BuilderElementToggleComponent {
    @Input() element: ElementToggle;
}