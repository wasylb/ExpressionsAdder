import { Term } from "./term";
import { IExpression } from "./interfaces/IExpression";
import { ICalculable } from "./interfaces/ICalculable";

export class Expression implements IExpression, ICalculable {
    _terms: Term[];

    constructor() {
        this._terms = [];
    }

    get terms() {
        return this._terms;
    }

    set terms(terms: Term[]) {
        this._terms = terms;
    }

    addTerm(term: Term): void {
        this.terms.push(term);
    }

    calculateFor(variable: number): number {
            const reducer = (accumulator: number, currentValue: Term) => accumulator + currentValue.calculateFor(variable);
            return this._terms.reduce(reducer, 0);
    }
    print(): void {
        throw new Error("Method not implemented.");
    }
}