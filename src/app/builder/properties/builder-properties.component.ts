import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
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
                <builder-properties-date *ngSwitchCase="inputType.date" [element]="element"></builder-properties-date>
                <builder-properties-dropdown *ngSwitchCase="inputType.dropdown" [element]="element"></builder-properties-dropdown>
                <builder-properties-radio *ngSwitchCase="inputType.radio" [element]="element"></builder-properties-radio>
                <builder-properties-text *ngSwitchCase="inputType.text" [element]="element"></builder-properties-text>
                <builder-properties-toggle *ngSwitchCase="inputType.toggle" [element]="element"></builder-properties-toggle>
            </div>
        </section>
    </div>
    `
})
export class BuilderPropertiesComponent {
    @Input() element: ElementInterface;

    inputType = InputType;
}