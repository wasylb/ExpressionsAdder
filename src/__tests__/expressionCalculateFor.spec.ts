import testUtils from "../testUtils";

let testUtilsDummies = testUtils.dummies;

describe('Expression calculateFor() method tests', () => {
    test('Should be equal to -6138 for variable of 2', () => {

        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.simpleTerms[3]);
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.simpleTerms[3]);
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.terms[0]);
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.terms[0]);
        testUtilsDummies.expressions[0].insertTerm(testUtilsDummies.terms[2]);
        const expectedResult = -6138;

        expect(testUtilsDummies.expressions[0].calculateFor(2)).toStrictEqual(expectedResult);
    });
})