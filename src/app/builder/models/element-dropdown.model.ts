import { ElementInterface } from './element.interface';
import { InputType } from './input-type.model';

export class ElementDropdown implements ElementInterface {
    options = new Array<string>();
    required: boolean;

    constructor(public id: string, public inputType: InputType, public label: string) {}
}