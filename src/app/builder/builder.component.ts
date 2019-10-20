import { Component, ViewChild } from "@angular/core";
import { BuilderDesignerComponent } from './designer/builder-designer.component';
import { ElementInterface } from './models/element.interface';

@Component({
    selector: 'builder',
    styleUrls: ['builder.component.scss'],
    template: `
    <div class="builder-container">
        <builder-toolbox class="panel"></builder-toolbox>
        <builder-designer class="panel designer" (elementSelected)="elementSelected($event)"></builder-designer>
        <builder-properties class="panel" [element]="selectedElement"></builder-properties>
    </div>
    `
})
export class BuilderComponent {
    @ViewChild(BuilderDesignerComponent, {static: false}) designerComponent: BuilderDesignerComponent;

    selectedElement: ElementInterface;

    elementSelected(element: ElementInterface): void {
        this.selectedElement = element;
    }
}