import { Component, Output, EventEmitter } from "@angular/core";
import { InputType } from '../models/input-type.model';
import { ElementInterface } from '../models/element.interface';
import { ElementCheckbox } from '../models/element-checkbox.model';
import { ElementText } from '../models/element-text.model';
import { ElementDate } from '../models/element-date.model';
import { ElementDropdown } from '../models/element-dropdown.model';
import { ElementRadio } from '../models/element-radio.model';
import { ElementToggle } from '../models/element-toggle.model';

@Component({
    selector: 'builder-designer',
    styleUrls: ['builder-designer.component.scss'],
    template: `
    <div class="builder-designer-container">
        <header>Designer</header>
        <section (drop)="drop($event)" (dragover)="allowDrop($event)">
            <div *ngIf="elements.length === 0" class="drag-drop-here">
                <span>
                    Drop Toolbox Elements Here<br>
                    <i class="material-icons">save_alt</i>
                </span>
            </div>

            <div *ngFor="let element of elements; let i = index" [ngSwitch]="element.inputType" 
                [ngClass]="{'selected':element.id === selectedElement.id}" class="element" (click)="clickElement(element)">
                
                <builder-element-checkbox *ngSwitchCase="inputType.checkbox" [element]="element"></builder-element-checkbox>
                <builder-element-date *ngSwitchCase="inputType.date" [element]="element"></builder-element-date>
                <builder-element-dropdown *ngSwitchCase="inputType.dropdown" [element]="element"></builder-element-dropdown>
                <builder-element-radio *ngSwitchCase="inputType.radio" [element]="element"></builder-element-radio>
                <builder-element-text *ngSwitchCase="inputType.text" [element]="element"></builder-element-text>
                <builder-element-toggle *ngSwitchCase="inputType.toggle" [element]="element"></builder-element-toggle>

                <i class="material-icons" (click)="clickRemove(i)">cancel</i>
            </div>
        </section>
    </div>
    `
})
export class BuilderDesignerComponent {
    @Output() elementSelected = new EventEmitter<ElementInterface>();

    elements = new Array<ElementInterface>();
    inputType = InputType;
    selectedElement: ElementInterface;

    allowDrop(event: DragEvent): void {
        event.preventDefault();
    }

    clickElement(element: ElementInterface): void {
        this.setSelectedElement(element);
    }

    clickRemove(elementIndex: number): void {
        this.elements.splice(elementIndex, 1);
        this.setSelectedElement(null);
    }

    drop(event: DragEvent): void {
        event.preventDefault();

        const inputType = event.dataTransfer.getData('inputType');
        const element = this.createElement(+inputType);

        if (element) {
            this.elements.push(element);
            this.setSelectedElement(element);
        } 
    }

    private createElement(inputType: InputType): ElementInterface {
        let element: ElementInterface;
        
        switch (inputType) {
            case InputType.checkbox:
                element = new ElementCheckbox(this.createGuid(), InputType.checkbox, 'New checkbox');
                break;
            case InputType.date:
                element = new ElementDate(this.createGuid(), InputType.date, 'New date');
                break;
            case InputType.dropdown:
                element = new ElementDropdown(this.createGuid(), InputType.dropdown, 'New dropdown');
                break;
            case InputType.radio:
                element = new ElementRadio(this.createGuid(), InputType.radio, 'New radio');
                break;
            case InputType.text:
                element = new ElementText(this.createGuid(), InputType.text, 'New textbox');
                break;
            case InputType.toggle:
                element = new ElementToggle(this.createGuid(), InputType.toggle, 'New toggle');
                break;
        }

        return element;
    }

    private createGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    private setSelectedElement(element: ElementInterface): void {
        this.selectedElement = element;
        this.elementSelected.emit(element);
    }
}