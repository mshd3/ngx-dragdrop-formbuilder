import { InputType } from './input-type.model';

export interface ElementInterface {
    id: string; // auto generated guid
    inputType: InputType;
    label: string;
    required: boolean;
}