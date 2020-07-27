import { Expression } from "./models/expression";
import { Term } from "./models/term";

export function addExpressions(expA: Expression, expB: Expression): string {

    let testTerm: Term = new Term(4, 2, 2);
    console.log(testTerm.toString());
    return 'hello eth';
}

let testExp = new Expression();
addExpressions(testExp, testExp);