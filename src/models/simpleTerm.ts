import { IPrintable } from "./interfaces/IPrintable";
import { Term } from "./term";
import { ICalculable } from "./interfaces/ICalculable";

export class SimpleTerm extends Term implements IPrintable, ICalculable {
    private _value: number;

    constructor(value: number) {
        super(NaN, NaN);
        this._value = value;
    }

    get value() {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    toString(): string {
        return this._value.toString();
    }

    calculateFor(): number {
        return this._value;
    }
}