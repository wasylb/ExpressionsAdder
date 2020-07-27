import { Term } from "../term";

export interface IExpression {
    calculateFor(variable: number): number;
    print(): void;
    addTerm(term: Term): void;
}