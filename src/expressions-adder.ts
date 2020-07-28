import { Expression } from "./models/expression";
import { SimpleTerm } from "./models/simpleTerm";
import { Term } from "./models/term";


let expA = new Expression();
let expB = new Expression();
let expC = new Expression();
const calculateFor = 2;


function initExpressions(expA: Expression, expB: Expression) {
    const sTermA1: SimpleTerm = new SimpleTerm(5);
    const sTermA2: SimpleTerm = new SimpleTerm(-4);
    const termA: Term = new Term(2, 2);

    const sTermB1: SimpleTerm = new SimpleTerm(4);
    const sTermB2: SimpleTerm = new SimpleTerm(-2);
    const termB: Term = new Term(3, 2);

    expA.insertTerm(sTermA1);
    expA.insertTerm(sTermA2);
    expA.insertTerm(termA);

    expB.insertTerm(sTermB1);
    expB.insertTerm(sTermB2);
    expB.insertTerm(termB);
}

initExpressions(expA, expB);
expC = expA.addExpression(expB);

console.log(`Expression A: ${expA.toString()}`);
console.log(`Expression B: ${expB.toString()}`);
console.log(`Expressions addition result: ${expC.toString()}`);
console.log(`${expC.toString()} calculated for value ${calculateFor} is: ${expC.calculateFor(calculateFor)}`);