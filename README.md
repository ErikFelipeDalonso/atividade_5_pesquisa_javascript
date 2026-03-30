# 01_Introdução

## O que é JavaScript?
JavaScript é uma linguagem de programação desenvolvida por Brendan Eich em 1995.
É realizada diretamente no navegador da web, sem necessidade de compilação.
É reconhecida como uma linguagem orientada a objetos, interpretada e baseada em eventos.

## Para que ele serve?
Em suma, sua função é aplicar modelos mais dinâmicos sendo o back-end principal de uma página web. Ele é o responsável por fazer com que a página reaja, responda e evolua conforme o usuário interage. Posto isso, a linguagem possibilita a criação de elementos dinâmicos, como menus drop-down, sliders, animações, criação de jogos no navegador usando APIs e enviar informações a um servidor.

Com JavaScript, é viável fazer alterações de conteúdo, adicionar ou excluir elementos e modificar atributos em tempo real, por causa disso, é utilizado o modelo DOM (Document Object Model) que é uma representação da estrutura de uma página.

Outro ponto positivo do JavaScript é a permissão de atualizar seções da página sem a necessidade de recarregá-la completamente, utilizando métodos como AJAX ou APIs modernas (fetch).


## Como ele complementa HTML e CSS?
HTML define a estrutura da página — títulos, parágrafos, botões, imagens, como se fosse o esqueleto principal.

CSS estiliza essa estrutura — cores, fontes, espaçamento e layout. Sendo a aparência do site.

JavaScript dá comportamento a tudo isso, é ele quem determina o que acontece quando o usuário interage com a página, como clicar em um botão, enviar um formulário ou atualizar um conteúdo dinamicamente. Como se fosse o cerebro e seus neurônios controlando a página web.
Em resumo: HTML constrói, CSS estiliza, JavaScript faz funcionar.

# 02_script_no_html

## como funciona;
JavaScript funciona no HTML adicionando interatividade e comportamento dinâmico à estrutura estática do site, através da tag <script>;
Ele atua manipulando o DOM (Document Object Model), permitindo alterar estilos, conteúdos, responder a cliques ou carregar dados sem atualizar a página.

## externos 
A melhor prática é usar arquivos externos (<script src="script.js"></script>) no final do <body> para performance.

## internos
Também pode ser interno (dentro de tags <script> na pagina) ou inline (eventos como onclick). 


### Exemplo 
Verifique o exemplo na pasta 02_script_no_html



# 03_variáveis_tipos_e_escopo

## O que é uma variável;
Uma variável é um espaço nomeado na memória do código que serve para armazenar valores para serem manipulados conforme necessário ao longo da programação. Esse valor pode ser um número, um texto, um objeto, uma lista, entre outros tipos.

## Como declarar variável em JavaScript;
Em JavaScript, a variável é declarada de acordo com 3 palavras chaves: var, let ou const, seguidas de um nome e, opcionalmente, de um valor inicial.

## Diferença entre var, let e const;
A var ele só é declarado quando a linha de leitura do código chega nele, ou seja, se vc utilizar o var e nao ter declarado ela antes, dara undefined ignorando o escopo de bloco. O let respeita o escopo de bloco e permite reatribuição de valor. O const também respeita o escopo de bloco, porém não permite que seu valor seja reatribuído após a declaração.

## Quando cada uma pode ser usada;
var: a forma tradicional de declarar variáveis no JavaScript podendo ser reatribuida e redeclarada. Atualmente, recomenda-se evitar o uso de var em JS moderno, preferindo let ou const.
let: ideal para variáveis cujo valor pode mudar ao longo do programa.
const: preferida para valores fixos ou referências que não devem ser alteradas.

## O que é escopo global;
Funções declaradas fora de qualquer bloco "{}" cuja função ficam acessíveis em todo o código.

## O que é escopo de função;
Variáveis declaradas dentro de uma função só existem dentro dela.
Fora da função, não podem ser acessadas.
## O que é escopo de bloco.
Criado dentro de estruturas como {}, if, for, while.
Apenas let e const respeitam esse escopo.

### Exemplo 
Verifique o exemplo na pasta 03_variáveis_tipos_e_escopo


# 04_operadores_comparações_e_lógica

## Operadores aritméticos
Operadores ariméticos padrões: +, -, *, /, %

## Operadores relacionais
| ==  compara apenas o valor.

| ===  compara valor e tipo.

| !=  verifica se os valores são diferentes..

| !== verifica se valores ou tipos são diferentes.

| > maior que

| < menor que

## Operadores lógicos
&& "E" lógico, só é verdadeiro se todas as condições forem verdadeiras.

|| "OU" lógico, é verdadeiro se pelo menos uma condição for verdadeira.

! "NÃO" lógico, inverte o valor (true vira false e vice-versa).

## Operadores Obrigatórios
O operador == verifica se o número 5 e a string "5" têm o mesmo valor, então == retorna verdadeiro, mesmo que os tipos sejam diferentes.
Aqui é usado ===, que compara valor e tipo. O número 5 não é igual à string "5", então retorna falso.
O operador != verifica se os valores são diferentes. Como o número 5 e a string "5" têm o mesmo valor, o resultado é falso.
O operador !== verifica se valores ou tipos são diferentes. O valor é igual, mas o tipo é diferente (número vs string), então retorna verdadeiro.

### Exemplo 
Verifique o exemplo na pasta 04_operadores_comparacoes_e_logica


# 05_estruturas_condicionais

## if
Verifica uma condição e, se for verdadeira, executa o bloco de código.

## if...else
Se a condição do if for falsa, o else executa outro bloco de código.

## switch
Testa vários valores possíveis de uma variável ou expressão, executando o bloco correspondente ao caso encontrado.

### Exemplo 
Verifique o exemplo na pasta 05_estruturas_condicionais


# 06_estruturas_de_repeticao

O for e o while são estruturas de repetição.
## for 
É utilizado quando temos conhecimento da quantidade de repetições, ele inicia uma variável, avalia uma condição e a incrementa a cada interação, tornando ele ideal para percorrer números de 0 a 10, por exemplo. for é mais objetivo quando temos um número definido de repetições

## while 
Executa repetições enquanto uma condição for verdadeira, sem a necessidade de saber quantas vezes isso ocorrerá no início.
O while é mais adaptável quando sabemos que queremos prosseguir "até que algo ocorra"

### Exemplo 
Verifique o exemplo na pasta 06_estruturas_de_repeticao


# 07_funcoes
Função é um bloco de código reutilizável.

## Função sem parâmetro
Executa uma ação.

## Função com parâmetro
Recebe dados.
## Função com retorno
Retorna um valor.

### Exemplo 
Verifique o exemplo na pasta 07_funcoes



# 08_manipulacao_de_pagina_com_java

## document
Representa toda a página HTML carregada, permitindo acesso e manipulação dos elementos.

## getElementById()
Seleciona um elemento específico pelo seu atributo id.

## querySelector()
Seleciona qualquer elemento usando seletores CSS (como p, .classe, #id).

## value
Obtém o valor digitado em um campo de formulário (input).

## checked
Verifica se uma caixa de seleção (checkbox) está marcada ou não.

## textContent
Altera ou lê o texto de um elemento.

## style
Modifica o estilo CSS de um elemento diretamente pelo JavaScript.

## classList
Adiciona, remove ou alterna classes CSS em um elemento.

## addEventListener()
Associa um evento (como clique, digitação, etc.) a um elemento, executando uma função quando o evento ocorre.

### Exemplo 
Verifique o exemplo na pasta 08_manipulacao_de_pagina_com_java


# referencias

    MDN Web Docs
    W3Schools
    Documentação oficial do JavaScript