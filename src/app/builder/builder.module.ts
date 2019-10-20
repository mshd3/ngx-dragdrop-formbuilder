import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuilderComponent } from './builder.component';
import { BuilderDesignerComponent } from './designer/builder-designer.component';
import { BuilderToolboxComponent } from './toolbox/builder-toolbox.component';
import { BuilderPropertiesComponent } from './properties/builder-properties.component';
import { BuilderElementCheckboxComponent } from './elements/builder-element-checkbox.component';
import { BuilderPropertiesCheckboxComponent } from './properties/builder-properties-checkbox.component';
import { BuilderElementTextComponent } from './elements/builder-element-text.component';
import { BuilderElementToggleComponent } from './elements/builder-element-toggle.component';
import { BuilderElementDropdownComponent } from './elements/builder-element-dropdown.component';
import { BuilderElementRadioComponent } from './elements/builder-element-radio.component';

@NgModule({
  declarations: [
    BuilderComponent,
    BuilderDesignerComponent,
    BuilderElementCheckboxComponent,
    BuilderElementDropdownComponent,
    BuilderElementRadioComponent,
    BuilderElementTextComponent,
    BuilderElementToggleComponent,
    BuilderPropertiesComponent,
    BuilderToolboxComponent,
    BuilderPropertiesCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [BuilderComponent],
  providers: [],
  bootstrap: []
})
export class BuilderModule { }
