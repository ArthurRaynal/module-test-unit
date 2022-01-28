import {NbToWords} from "../src/NbToWords";


describe("The NbToWords function", function(){


    test('to words single digit', function() {
        expect(NbToWords(5)).toBe('cinq')
        expect(NbToWords(1)).toBe('un')
        expect(NbToWords(7)).toBe('sept')
    })

    test('to words double digit', function() {
        expect(NbToWords(10)).toBe('dix')
        expect(NbToWords(17)).toBe('dix-sept')
        expect(NbToWords(19)).toBe('dix-neuf')
        expect(NbToWords(13)).toBe('treize')
    })

    test('to words hundreds', function() {
        expect(NbToWords(100)).toBe('cent')
        expect(NbToWords(200)).toBe('deux cent')
        expect(NbToWords(251)).toBe('deux cent cinquante un')
        expect(NbToWords(290)).toBe('deux cent quatre-vingt-dix')
        expect(NbToWords(218)).toBe('deux cent dix-huit')
    })

    test('test', function() {
        expect(NbToWords(1155283 )).toBe('un million cent cinquante cinq mille deux cent quatre-vingt trois')
    })

})