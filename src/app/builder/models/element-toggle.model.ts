import { ElementInterface } from './element.interface';
import { InputType } from './input-type.model';

export class ElementToggle implements ElementInterface {
    defaultValue: boolean;
    required: boolean;

    constructor(public id: string, public inputType: InputType, public label: string) {}
}