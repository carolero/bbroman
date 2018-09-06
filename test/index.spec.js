const assert = require('assert');
const index = require('../index');

describe ('romanToInt()', function () {
    it('deve retornar em numeros romanos', () => {
        assert.equal(romanToInt(0), '');
    });
    it('deve retornar em numeros romanos', () => {
        assert.equal(romanToInt(1), 'I');
    });
    it('deve retornar em numeros romanos', () => {
        assert.equal(romanToInt(5), 'V');
    });
    it('deve retornar em numeros romanos', () => {
        assert.equal(romanToInt(10), 'X');
    });
    it('deve retornar em numeros romanos', () => {
        assert.equal(romanToInt(12), 'XI');
    });
    it('deve retornar em numeros romanos', () => {
        assert.equal(romanToInt(19), 'IX');
    });
    it('deve retornar em numeros romanos', () => {
        assert.equal(romanToInt(20), 'XX');
    });
    it('deve retornar em numeros romanos', () => {
        assert.equal(romanToInt(1000), 'M');
    });
    it('deve retornar em numeros romanos', () => {
        assert.equal(romanToInt(1111), 'MCXI');
    });
    it('deve retornar em numeros romanos', () => {
        assert.equal(romanToInt(2147), 'MMCXLVII');
    });
    it('deve retornar em numeros romanos', () => {
        assert.equal(romanToInt(3999), 'MMMCMXCIX');
    });
    it('deve retornar em numeros romanos', () => {
        assert.equal(romanToInt(4000), 'Escolha outro número, o máximo romano é 3999.');
    });
});