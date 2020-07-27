// JUST FOR KIND-BEING PURPOSES

function greetings(): string {
    return 'Hello Eth';
}

describe('Greetings', () => {
    test('It should be kind', () => {
        expect(greetings()).toStrictEqual('Hello Eth');
    });
});