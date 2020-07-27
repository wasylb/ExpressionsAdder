import { ICalculable } from "./interfaces/ICalculable";
import { IPrintable } from "./interfaces/IPrintable";
import { SimpleTerm } from "./simpleTerm";

export class Term implements ICalculable, IPrintable {
    private _constant: number;
    private _exponent: number;

    constructor(constant: number, exponent: number) {
            this._constant = constant;
            this._exponent = exponent
    }
    
    get constant() {
        return this._constant;
    }

    set constant(constant: number) {
        this._constant = constant;
    }
    
    get exponent() {
        return this._exponent;
    }

    set exponent(exponent: number) {
        this._exponent = exponent;
    }

    set(constant: number, exponent: number): void {
        this._constant = constant;
        this._exponent = exponent;
    }

    toString(): string {
        return `${this._constant !== 0 ? this._constant.toString().concat('x') : ''}${this._exponent && this._constant !== 0 ? ('^').concat(this._exponent.toString()) : ''}`;
    }

    calculateFor(variable: number): number {
        return this._constant * (Math.pow(variable, this._exponent));
    }
}