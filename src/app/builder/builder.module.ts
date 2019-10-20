import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderComponent } from './builder.component';
import { BuilderDesignerComponent } from './designer/builder-designer.component';
import { BuilderToolboxComponent } from './toolbox/builder-toolbox.component';
import { BuilderPropertiesComponent } from './properties/builder-properties.component';
import { BuilderElementCheckboxComponent } from './elements/builder-element-checkbox.component';
import { BuilderPropertiesCheckboxComponent } from './properties/builder-properties-checkbox.component';

@NgModule({
  declarations: [
    BuilderComponent,
    BuilderDesignerComponent,
    BuilderElementCheckboxComponent,
    BuilderPropertiesComponent,
    BuilderToolboxComponent,
    BuilderPropertiesCheckboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BuilderComponent],
  providers: [],
  bootstrap: []
})
export class BuilderModule { }
