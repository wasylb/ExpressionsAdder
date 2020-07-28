import testUtils from "../testUtils";

let testUtilsDummies = testUtils.dummies;

describe('Expression insertTerm() tests', () => {
    test('Should throw an error', () => {
        expect(() => {
            testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.invalidTerms[0]);
        }).toThrowError();
    });
    test('Should throw an error', () => {
        expect(() => {
            testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.invalidTerms[1]);
        }).toThrowError();
    });
    test('Should throw an error', () => {
        expect(() => {
            testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.invalidTerms[2]);
        }).toThrowError();
    });
    test('Should throw an error', () => {
        expect(() => {
            testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.invalidTerms[3]);
        }).toThrowError();
    });
    test('Should pass successfully', () => {
        expect(() => {
            testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.terms[0]);
        }).not.toThrowError();
    });
    test('Should pass successfully', () => {
        expect(() => {
            testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.terms[1]);
        }).not.toThrowError();
    });
});