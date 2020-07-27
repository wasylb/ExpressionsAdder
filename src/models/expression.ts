import { Term } from "./term";
import { IExpression } from "./interfaces/IExpression";
import { ICalculable } from "./interfaces/ICalculable";
import { IPrintable } from "./interfaces/IPrintable";
import { SimpleTerm } from "./simpleTerm";

export class Expression implements IExpression, ICalculable, IPrintable {
    private _terms: Term[];

    constructor() {
        this._terms = [];
    }

    get terms() {
        return this._terms;
    }

    set terms(terms: Term[]) {
        this._terms = terms;
    }

    insertTerm(term: Term): void {
        if (term instanceof SimpleTerm || this.isRealNumber(term.constant) && this.isRealNumber(term.exponent)) {
            this.terms.push(term);
        } else {
            throw new Error('One of the provided parameters is not a real number');
        }
    }

    addExpression(expressionAddend: Expression): Expression {
        let resultExpression = new Expression();
        const constantsReducer = (accumulator: number, currentValue: Term) => accumulator + currentValue.constant;
        const valueReducer = (accumulator: number, currentValue: Term) => accumulator + (currentValue as SimpleTerm).value;
        const expressionsTerms: Array<Term> = [...this._terms, ...expressionAddend.terms];
        const exponentsTermsMap: Map<number, Array<Term | SimpleTerm>> = new Map();
        expressionsTerms.forEach(term => {
            if (!exponentsTermsMap.get(term.exponent)) {
                exponentsTermsMap.set(term.exponent, new Array<Term>());
                exponentsTermsMap.get(term.exponent)?.push(term);
            } else {
                exponentsTermsMap.get(term.exponent)?.push(term);
            }
        });

        exponentsTermsMap.forEach((exponentTerms, exponent, map) => {
            if (Number.isNaN(exponent)) {
                const reducedValues = exponentTerms.reduce(valueReducer, 0);
                const tmpSimpleTerm: SimpleTerm = new SimpleTerm(reducedValues);
                resultExpression.insertTerm(tmpSimpleTerm);
            } else {
                const reducedConstants = exponentTerms.reduce(constantsReducer, 0);
                const tmpTerm: Term = new Term(reducedConstants, exponent);
                resultExpression.insertTerm(tmpTerm);
            }
        });
        return resultExpression;
    }

    calculateFor(variable: number): number {
            const reducer = (accumulator: number, currentValue: Term) => accumulator + currentValue.calculateFor(variable);
            return this._terms.reduce(reducer, 0);
    }

    toString(): string {
        this.sortTerms();
        let expressionString = '';
        this._terms.forEach((term, index, array) => {
            expressionString = (term instanceof SimpleTerm) ? expressionString.concat((term as SimpleTerm).toString()) : expressionString.concat((term as Term).toString());
            if (index !== this._terms.length - 1) {
                expressionString = expressionString.concat(' + ');
            }
        });
        return expressionString;
    }

    sortTerms() {
        const sortFn = (termA: Term | SimpleTerm, termB: Term | SimpleTerm) => {
            if (!Number.isNaN(termB.exponent) || termA.exponent > termB.exponent) {
                return 1;
            } else {
                return -1;
            }
        };
        this._terms.sort(sortFn);
    }

    isRealNumber(num: number) {
        return typeof num == 'number' && !isNaN(num) && isFinite(num);
    }
}