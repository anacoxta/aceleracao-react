const { normalizeStr } = require('./index-test');

describe('Deve retornar filtro genérico para busca de produtos', () => {
  it('Deve retornar uma string normalizada, sem acentuação', () => {
    const normalString = normalizeStr('ÓCULOS');
    expect(normalString).toEqual('OCULOS, entrada com acento normalizada');
  });

  it('Deve retornar string normalizada, seguida de validação de acentuação para string', () => {
    const normalString = normalizeStr('CALÇA');
    expect(normalString).toEqual('CALCA, entrada com acento normalizada');
  });

  it('Deve retornar string normalizada, seguida de validação de acentuação para string', () => {
    const normalString = normalizeStr('BOTÕES');
    expect(normalString).toEqual('BOTOES, entrada com acento normalizada');
  });

  it('Deve retornar string normalizada, seguida de validação de acentuação para string', () => {
    const normalString = normalizeStr('VESTIDO');
    expect(normalString).toEqual('VESTIDO, entrada sem acento');
  });

  it('Deve retornar string normalizada, seguida de validação de acentuação para string', () => {
    const normalString = normalizeStr('BLUSA');
    expect(normalString).toEqual('BLUSA, entrada sem acento');
  });
});
