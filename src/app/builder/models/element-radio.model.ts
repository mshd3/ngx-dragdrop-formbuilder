import { ElementInterface } from './element.interface';
import { InputType } from './input-type.model';

export class ElementRadio implements ElementInterface {
    options: Array<string> = ['Option 1'];
    required: boolean;

    constructor(public id: string, public inputType: InputType, public label: string) {}
}