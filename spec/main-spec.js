const main = require('../main/main');

describe('guess_number_function', () => {

    it('returns 4A0B when guess all number right',function(){
        var result = main(1234, 1234);
        expect(result).toEqual('4A0B');
    });

    it('returns 0A4B when guess all number right but get wrong sort',function(){
        var result = main(1234, 4321);
        expect(result).toEqual('0A4B');
    });

    it('returns 0A0B when guess all number wrong',function(){
        var result = main(1234, 5555);
        expect(result).toEqual('0A0B');
    });

});