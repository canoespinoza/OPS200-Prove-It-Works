const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
   let mortgage = null

    beforeEach(() => {
        mortgage = new Mortgage();
    });

    it('should have a monthly payment calculation', () => {
     expect(mortgage.monthlyPayment).to.exist;
    });

    it('monthly payment should return a number', () => {
     expect(new(mortgage).constructor(100000, 3.0, 15, 12).monthlyPayment()).to.equal(690.58);
    });
    
    it('should calculate monthly payment correctly', () => {
     expect(new(mortgage).constructor(100000, 3.0, 15, 4).monthlyPayment()).to.equal(2075.84);
    });

    it('should calculate monthly payment correctly', () => {
        expect(new(mortgage).constructor(300000, 2.5, 30, 12).monthlyPayment()).to.equal(1185.36);
    });
});
