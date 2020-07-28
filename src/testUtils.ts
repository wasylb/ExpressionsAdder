import { Expression } from "./models/expression";
import { Term } from "./models/term";
import { SimpleTerm } from "./models/simpleTerm";

export default {
    dummies: {
        expressions: [new Expression(), new Expression(), new Expression()],
        terms: [new Term(2, 10), new Term(0, -5), new Term(-5, 11), new Term(2, -800)],
        invalidTerms: [new Term(NaN, NaN), new Term(Infinity, Infinity), new Term(NaN, Infinity), new Term(Infinity, NaN)],
        simpleTerms: [new SimpleTerm(2), new SimpleTerm(-8), new SimpleTerm(1565), new SimpleTerm(3)]
    }
}