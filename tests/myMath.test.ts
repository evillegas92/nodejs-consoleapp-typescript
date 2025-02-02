import { MyMath } from '../src/myMath';

test('LCM of 4 and 6 is 12', () => {
    const result = MyMath.calculateLeastCommonMultiple(4, 6);
    expect(result).toBe(12);
});