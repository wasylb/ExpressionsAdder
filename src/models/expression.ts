import { Term } from "./term";
import { IExpression } from "./interfaces/IExpression";

export class Expression implements IExpression {
    terms: Term[];

    constructor() {
        this.terms = [];
    }
}