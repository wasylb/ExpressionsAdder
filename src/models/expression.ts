import { Term } from "./term";
import { IExpression } from "./interfaces/IExpression";
import { ICalculable } from "./interfaces/ICalculable";
import { IPrintable } from "./interfaces/IPrintable";
import { SimpleTerm } from "./simpleTerm";
import generalUtils from "../generalUtils";

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
        if (term instanceof SimpleTerm || generalUtils.isRealNumber(term.constant) && generalUtils.isRealNumber(term.exponent)) {
            this.terms.push(term);
        } else {
            throw new Error('One of the provided parameters is not a real number');
        }
    }

    addExpression(expressionAddend: Expression): Expression {
        let resultExpression = new Expression();
        const valueReducer = (accumulator: number, currentValue: number) => {
            return accumulator + currentValue;
        }

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
                const reducedValues = (exponentTerms as Array<SimpleTerm>).map(term => term.value).reduce(valueReducer);
                const tmpSimpleTerm: SimpleTerm = new SimpleTerm(reducedValues);
                resultExpression.insertTerm(tmpSimpleTerm);
            } else {
                const reducedConstants = (exponentTerms as Array<Term>).map(term => term.constant).reduce(valueReducer);
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
            expressionString += term.toString();
            if (index !== this._terms.length - 1 && term.toString() !== '') {
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
}