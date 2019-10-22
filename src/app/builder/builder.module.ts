import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
import { BuilderElementDateComponent } from './elements/builder-element-date.component';
import { BuilderPropertiesDateComponent } from './properties/builder-properties-date.component';
import { BuilderPropertiesTextComponent } from './properties/builder-properties-text.component';
import { BuilderPropertiesToggleComponent } from './properties/builder-properties-toggle.component';
import { BuilderPropertiesDropdownComponent } from './properties/builder-properties-dropdown.component';
import { BuilderPropertiesRadioComponent } from './properties/builder-properties-radio.component';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    BuilderComponent,
    BuilderDesignerComponent,
    BuilderElementCheckboxComponent,
    BuilderElementDateComponent,
    BuilderElementDropdownComponent,
    BuilderElementRadioComponent,
    BuilderElementTextComponent,
    BuilderElementToggleComponent,
    BuilderPropertiesComponent,
    BuilderToolboxComponent,
    BuilderPropertiesCheckboxComponent,
    BuilderPropertiesDateComponent,
    BuilderPropertiesDropdownComponent,
    BuilderPropertiesRadioComponent,
    BuilderPropertiesTextComponent,
    BuilderPropertiesToggleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatChipsModule,
    NoopAnimationsModule
  ],
  exports: [BuilderComponent],
  providers: [],
  bootstrap: []
})
export class BuilderModule { }
