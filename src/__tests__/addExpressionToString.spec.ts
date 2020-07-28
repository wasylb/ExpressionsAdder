import { Expression } from "../models/expression";
import { Term } from "../models/term";
import testUtils from "../testUtils";
import { SimpleTerm } from "../models/simpleTerm";

let testUtilsDummies = testUtils.dummies;

describe('Expression toString() after Expressions addition test', () => {
    test('Should be 2x^10 + -6', () => {
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.terms[0]);
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.terms[1]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[0]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[1]);

        testUtilsDummies.expressions[2] = testUtilsDummies.expressions[0].addExpression(testUtilsDummies.expressions[1]);

        expect(testUtilsDummies.expressions[2].toString()).toStrictEqual('2x^10 + -6');
    });
    test('Should be 4x^10 + -16', () => {
        testUtilsDummies.expressions[0].terms = [];
        testUtilsDummies.expressions[1].terms = [];
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.terms[0]);
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.terms[0]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[1]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[1]);

        testUtilsDummies.expressions[2] = testUtilsDummies.expressions[0].addExpression(testUtilsDummies.expressions[1]);

        expect(testUtilsDummies.expressions[2].toString()).toStrictEqual('4x^10 + -16');
    });

    test('Should be -16', () => {
        testUtilsDummies.expressions[0].terms = [];
        testUtilsDummies.expressions[1].terms = [];
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[1]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[1]);

        testUtilsDummies.expressions[2] = testUtilsDummies.expressions[0].addExpression(testUtilsDummies.expressions[1]);

        expect(testUtilsDummies.expressions[2].toString()).toStrictEqual('-16');
    });

    test('Should be 1528', () => {
        testUtilsDummies.expressions[0].terms = [];
        testUtilsDummies.expressions[1].terms = [];
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[1]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[1]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[2]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[3]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[1]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[1]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[1]);

        testUtilsDummies.expressions[2] = testUtilsDummies.expressions[0].addExpression(testUtilsDummies.expressions[1]);

        expect(testUtilsDummies.expressions[2].toString()).toStrictEqual('1528');
    });

    test('Should be 10x^10 + -5x^11 + 2x^ -800', () => {
        testUtilsDummies.expressions[0].terms = [];
        testUtilsDummies.expressions[1].terms = [];
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.terms[0]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.terms[0]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.terms[2]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.terms[3]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.terms[0]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.terms[0]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.terms[0]);

        testUtilsDummies.expressions[2] = testUtilsDummies.expressions[0].addExpression(testUtilsDummies.expressions[1]);

        expect(testUtilsDummies.expressions[2].toString()).toStrictEqual('10x^10 + -5x^11 + 2x^-800');
    });

    test('Should be 4x^10 + -5x^11 + 9', () => {
        testUtilsDummies.expressions[0].terms = [];
        testUtilsDummies.expressions[1].terms = [];
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.terms[0]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.terms[0]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.terms[2]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[3]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[0]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[0]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[0]);

        testUtilsDummies.expressions[2] = testUtilsDummies.expressions[0].addExpression(testUtilsDummies.expressions[1]);

        expect(testUtilsDummies.expressions[2].toString()).toStrictEqual('4x^10 + -5x^11 + 9');
    });
});