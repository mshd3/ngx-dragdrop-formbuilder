import { Component, Output, EventEmitter } from "@angular/core";
import { InputType } from '../models/input-type.model';
import { ElementInterface } from '../models/element.interface';
import { ElementCheckbox } from '../models/element-checkbox.model';

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

            <div *ngFor="let element of elements; let i = index" [ngSwitch]="element.inputType" [ngClass]="{'selected':element==selectedElement}" class="element" (click)="clickElement(element)">
                <builder-element-checkbox *ngSwitchCase="inputType.checkbox" [element]="element"></builder-element-checkbox>
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
                element = new ElementCheckbox(InputType.checkbox, 'New checkbox');
                break;
        }

        return element;
    }

    private setSelectedElement(element: ElementInterface): void {
        this.selectedElement = element;
        this.elementSelected.emit(element);
    }
}