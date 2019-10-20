import { ElementInterface } from './element.interface';
import { InputType } from './input-type.model';

export class ElementCheckbox implements ElementInterface {
    defaultValue: boolean;
    required: boolean;

    constructor(public inputType: InputType, public label: string) {}
}