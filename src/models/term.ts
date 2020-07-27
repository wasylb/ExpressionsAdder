import { ICalculable } from "./interfaces/ICalculable";

export class Term implements ICalculable {
    private _constant: number;
    private _variable: number; // there's no need to hold string 'x' in every term (it'd be obvious, that if it's value is 0, then we've no variable - just constant and exponent). In my opinion, the better option is to hold a specific value which could be used in the future for a calculation purposes
    private _exponent: number;

    constructor(constant: number, variable: number, exponent: number) {
        this._constant = constant;
        this._variable = variable;
        this._exponent = exponent;
    }
    
    get constant() {
        return this._constant;
    }

    set constant(constant: number) {
        this._constant = constant;
    }

    get variable() {
        return this._variable;
    }

    set variable(variable: number) {
        this._variable = variable;
    }
    
    get exponent() {
        return this._exponent;
    }

    set exponent(exponent: number) {
        this._exponent = exponent;
    }

    set(constant: number, variable: number, exponent: number): void {
        this._constant = constant;
        this._variable = variable;
        this._exponent = exponent;
    }

    toString(): string {
        return `${this._constant !== 0 ? this._constant : ''}${this.variable ? 'x' : ''}${this._exponent && this.variable ? ('^').concat(this._exponent.toString()) : ''}`;
    }

    calculateFor(variable: number): number {
        return 0;
    }
}