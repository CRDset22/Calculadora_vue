# Calculadora Vue

Calculadora aritmética simples — soma, subtração, multiplicação e divisão —
feita com **Vue 3** (Composition API + `<script setup>`) e **Vite**.

> Projeto de estudo/prática de front-end.

## Funcionalidades

- Dois campos numéricos (X e Y)
- Seleção do operador (soma, subtração, multiplicação, divisão)
- Resultado calculado automaticamente a cada alteração
- Proteção contra divisão por zero (mostra "Indefinido")
- Botão para limpar todos os campos

## Tecnologias

- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [Vite](https://vitejs.dev/) como bundler e servidor de desenvolvimento
- [Vitest](https://vitest.dev/) + [Vue Test Utils](https://test-utils.vuejs.org/)
  para os testes automatizados

## Como rodar o projeto

É preciso ter o [Node.js](https://nodejs.org/) instalado.

```bash
# 1. instalar as dependências (uma vez só)
npm install

# 2. rodar em modo de desenvolvimento (com recarregamento automático)
npm run dev

# 3. rodar os testes automatizados
npm run test

# 4. gerar a versão final de produção, na pasta dist/
npm run build
```

O `npm run dev` abre um servidor local; o próprio Vite mostra o endereço no
terminal (normalmente `http://localhost:5173`).

## Estrutura de pastas e arquivos

```
Calculadora_vue/
├── index.html               ponto de entrada carregado pelo navegador
├── package.json             dependências e scripts (dev/build/test)
├── package-lock.json        versões exatas de cada dependência instalada
├── vite.config.js           configuração do Vite (plugin do Vue e alias "@")
├── jsconfig.json            ajuda o editor a entender o alias "@/*" -> src/
├── LICENSE                  licença MIT do projeto
├── .gitignore               arquivos que o Git deve ignorar (node_modules, dist...)
├── .gitattributes           normaliza as quebras de linha do repositório (LF)
├── .vscode/
│   └── extensions.json      recomenda a extensão Vue.volar no VS Code
├── public/
│   └── favicon.ico          ícone da aba do navegador
└── src/
    ├── main.js               cria a aplicação Vue e a monta em #app
    ├── App.vue                componente raiz: estado da calculadora e o
    │                          cálculo (soma/subtração/multiplicação/divisão)
    ├── assets/
    │   ├── base.css           reset e variáveis de cor base
    │   └── main.css           estilos globais (importa o base.css)
    └── components/
        ├── InputFields.vue    os dois campos numéricos (X e Y)
        ├── SelectField.vue    o seletor do operador
        ├── ResultField.vue    exibe o resultado calculado
        ├── ClearButton.vue    botão "Limpar"
        └── __tests__/
            └── App.spec.js    testes automatizados (Vitest + Vue Test Utils)
```

Cada peça da calculadora é um componente próprio dentro de
`src/components/`, e o `App.vue` é quem guarda o estado (valores de X, Y e
operador escolhido) e repassa tudo para os componentes filhos via props —
um padrão comum em projetos Vue: componentes pequenos e "burros" (só
exibem e avisam quando algo muda) controlados por um componente pai que
concentra a lógica.

## Testes automatizados

O projeto tem uma suíte de testes em
`src/components/__tests__/App.spec.js`, cobrindo:

- soma e divisão calculando o valor correto;
- divisão por zero (quando o **divisor**, Y, é zero) retornando "Indefinido";
- divisão com o **dividendo** (X) igual a zero retornando 0 normalmente;
- o botão "Limpar" zerando os campos e o resultado.

Rode com `npm run test`. Os dois testes de divisão existem especificamente
para proteger a correção descrita no `erros.txt` (item BUG-01) contra uma
futura regressão.

## Observações desta revisão

Esta versão do projeto passou por uma revisão completa — bugs, imagens/CSS
quebrados e organização geral. A lista detalhada de tudo que foi encontrado
e corrigido, incluindo o que foi **investigado e descartado por não ser
um bug de verdade** (após testes automatizados confirmarem que funcionava),
está no arquivo `erros.txt`.
