import { InputType } from './input-type.model';

export class Input {
    constructor(public display: string, public icon: string, public type: InputType) {}
}