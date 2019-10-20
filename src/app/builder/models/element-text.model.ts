import { ElementInterface } from './element.interface';
import { InputType } from './input-type.model';

export class ElementText implements ElementInterface {
    required: boolean;

    constructor(public id: string, public inputType: InputType, public label: string) {}
}