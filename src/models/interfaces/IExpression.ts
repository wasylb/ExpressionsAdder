import { Term } from "../term";

export interface IExpression {
    calculateFor(variable: number): number;
    insertTerm(term: Term): void;
}