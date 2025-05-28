/**
 * @jest-environment jsdom
 */

const { aplicarMascaraCpfCnpj } = require('../../js/cadastro');

describe('aplicarMascaraCpfCnpj', () => {
  test('formata CPF com 11 dígitos', () => {
    const input = document.createElement('input');
    aplicarMascaraCpfCnpj(input);
    input.value = '00000000000';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('000.000.000-00');
  });

  test('formata CNPJ com 14 dígitos', () => {
    const input = document.createElement('input');
    aplicarMascaraCpfCnpj(input);
    input.value = '00000000000000';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('00.000.000/0000-00');
  });
});
