import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ElementInterface } from '../models/element.interface';
import { InputType } from '../models/input-type.model';

@Component({
    selector: 'builder-properties',
    styleUrls: ['builder-properties.component.scss'],
    template: `
    <div class="builder-properties-container">
        <header>Properties</header>
        <section>
            <div *ngIf="element" [ngSwitch]="element.inputType">
                <builder-properties-checkbox *ngSwitchCase="inputType.checkbox" [element]="element"></builder-properties-checkbox>

                <button type="button" class="apply">Apply</button>
            </div>
        </section>
    </div>
    `
})
export class BuilderPropertiesComponent {
    @Input() element: ElementInterface;

    inputType = InputType;
}