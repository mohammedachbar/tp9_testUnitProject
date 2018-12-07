import { MathService } from './math.service';

describe('MyServiceService', () => {
    it('La méthode incrementCount doit incrémenter la propriété count', () => {

        let mathService = new MathService();

        mathService.incrementCount();
        expect(mathService.count).toEqual(1);

        mathService.incrementCount();
        expect(mathService.count).toEqual(2);
    });
});
