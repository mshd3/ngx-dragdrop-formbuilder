import { ElementInterface } from './element.interface';
import { InputType } from './input-type.model';

export class ElementRadio implements ElementInterface {
    options = new Array<[string, Object]>(); // represents display value and bound object
    required: boolean;

    constructor(public id: string, public inputType: InputType, public label: string) {}
}