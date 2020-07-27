import { Term } from "../models/term";

let termDummy = new Term(1, 1);

describe('Term toString function returned value tests', () => {
    test('2x^2', () => {
        termDummy.set(2, 2);
        expect(termDummy.toString()).toStrictEqual('2x^2');
    });
    test('4x^3', () => {
        termDummy.set(4, 3);
        expect(termDummy.toString()).toStrictEqual('4x^3');
    });
    test('1x^2', () => {
        termDummy.set(1, 2);
        expect(termDummy.toString()).toStrictEqual('1x^2');
    });
    test('0x^4', () => {
        termDummy.set(0, 4);
        expect(termDummy.toString()).toStrictEqual('');
    });
    test('10x^-5', () => {
        termDummy.set(10, -5);
        expect(termDummy.toString()).toStrictEqual('10x^-5');
    });
    test('-1x^1', () => {
        termDummy.set(-1, 1);
        expect(termDummy.toString()).toStrictEqual('-1x^1');
    });
    test('0x^0', () => {
        termDummy.set(0, 0);
        expect(termDummy.toString()).toStrictEqual('');
    });
    test('5x^5', () => {
        termDummy.set(5, 5);
        expect(termDummy.toString()).toStrictEqual('5x^5');
    });
});