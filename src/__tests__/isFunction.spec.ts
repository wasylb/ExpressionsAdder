import { addExpressions } from '../expressions-adder';


describe('Is function', () => {
    test('Its type should be the function', () => {
        expect(typeof addExpressions).toStrictEqual('function');
    });
});