import { Expression } from "../models/expression";
import { Term } from "../models/term";
import { SimpleTerm } from "../models/simpleTerm";
import testUtils from "../testUtils";

let testUtilsDummies = testUtils.dummies;

describe('addExpression() method tests', () => {
    test('Should be equal to one free term of 8', () => {

        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.simpleTerms[3]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[3]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[0]);

        const expectedObject = {
            _terms: [new SimpleTerm(8)]
        };

        expect(testUtilsDummies.expressions[0].addExpression(testUtilsDummies.expressions[1])).toMatchObject(expectedObject);
    });

    test('Should be equal to one free term of 1514', () => {
        testUtilsDummies.expressions[0].terms = [];
        testUtilsDummies.expressions[1].terms = [];
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.simpleTerms[3]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[2]);
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.simpleTerms[1]);
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.simpleTerms[1]);
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.simpleTerms[1]);
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.simpleTerms[1]);
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.simpleTerms[1]);
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.simpleTerms[1]);
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.simpleTerms[1]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[0]);

        const expectedObject = {
            _terms: [new SimpleTerm(1514)]
        };

        expect(testUtilsDummies.expressions[0].addExpression(testUtilsDummies.expressions[1])).toMatchObject(expectedObject);
    });

    test('Should be equal to object matching {0x^-5, -5x^11, 2x^10}', () => {
        testUtilsDummies.expressions[0].terms = [];
        testUtilsDummies.expressions[1].terms = [];
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.terms[1]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.terms[0]);
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.terms[2]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.terms[1]);

        const expectedObject = {
            _terms: [new Term(0, -5), new Term(-5, 11), new Term(2, 10)]
        };
        
        expect(testUtilsDummies.expressions[0].addExpression(testUtilsDummies.expressions[1])).toMatchObject(expectedObject);
    });

    test('Should be equal to object matching {0x^-5, 2x^10} and one free word of 1567', () => {
        testUtilsDummies.expressions[0].terms = [];
        testUtilsDummies.expressions[1].terms = [];
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.terms[1]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.terms[0]);
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.simpleTerms[0]);
        testUtilsDummies.expressions[1].insertTerm(testUtilsDummies.simpleTerms[2]);

        const expectedObject = {
            _terms: [new Term(0, -5), new SimpleTerm(1567), new Term(2, 10)]
        };
        
        expect(testUtilsDummies.expressions[0].addExpression(testUtilsDummies.expressions[1])).toMatchObject(expectedObject);
    });
});



