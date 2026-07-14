import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../App.vue';

// Extrai o texto que aparece dentro do fieldset "Resultado"
const lerResultado = (wrapper) =>
  wrapper.find('.result div').text();

describe('Calculadora - operações básicas', () => {
  it('soma dois valores corretamente', async () => {
    const wrapper = mount(App);
    await wrapper.find('#number-x').setValue(4);
    await wrapper.find('#number-y').setValue(6);
    await wrapper.find('select').setValue('soma');
    expect(lerResultado(wrapper)).toBe('10');
  });

  it('divide dois valores corretamente quando o divisor não é zero', async () => {
    const wrapper = mount(App);
    await wrapper.find('#number-x').setValue(10);
    await wrapper.find('#number-y').setValue(2);
    await wrapper.find('select').setValue('divisao');
    expect(lerResultado(wrapper)).toBe('5');
  });

  // Regressão: a checagem de divisão por zero testava o dividendo (X)
  // em vez do divisor (Y). Ver erros.txt, item [BUG-01].
  it('retorna "Indefinido" quando o DIVISOR (Y) é zero', async () => {
    const wrapper = mount(App);
    await wrapper.find('#number-x').setValue(8);
    await wrapper.find('#number-y').setValue(0);
    await wrapper.find('select').setValue('divisao');
    expect(lerResultado(wrapper)).toBe('Indefinido');
  });

  it('retorna 0 quando o DIVIDENDO (X) é zero e o divisor não é', async () => {
    const wrapper = mount(App);
    await wrapper.find('#number-x').setValue(0);
    await wrapper.find('#number-y').setValue(8);
    await wrapper.find('select').setValue('divisao');
    expect(lerResultado(wrapper)).toBe('0');
  });

  it('o botão Limpar zera os campos e o resultado', async () => {
    const wrapper = mount(App);
    await wrapper.find('#number-x').setValue(8);
    await wrapper.find('#number-y').setValue(2);
    await wrapper.find('select').setValue('soma');

    await wrapper.find('button').trigger('click');

    expect(wrapper.find('#number-x').element.value).toBe('0');
    expect(wrapper.find('#number-y').element.value).toBe('0');
    expect(lerResultado(wrapper)).toBe('');
  });
});
