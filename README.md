# 01_Introdução

# O que é JavaScript?
JavaScript é uma linguagem de programação desenvolvida por Brendan Eich em 1995.
É realizada diretamente no navegador da web, sem necessidade de compilação.
É reconhecida como uma linguagem orientada a objetos, interpretada e baseada em eventos.

# Para que ele serve?
Em suma, sua função é aplicar modelos mais dinâmicos sendo o back-end principal de uma página web. Ele é o responsável por fazer com que a página reaja, responda e evolua conforme o usuário interage. Posto isso, a linguagem possibilita a criação de elementos dinâmicos, como menus drop-down, sliders, animações, criação de jogos no navegador usando APIs e enviar informações a um servidor.

Com JavaScript, é viável fazer alterações de conteúdo, adicionar ou excluir elementos e modificar atributos em tempo real, por causa disso, é utilizado o modelo DOM (Document Object Model) que é uma representação da estrutura de uma página.

Outro ponto positivo do JavaScript é a permição de atualizar seções da página sem a necessidade de recarregá-la completamente, utilizando métodos como AJAX ou APIs modernas (fetch).


# Como ele complementa HTML e CSS?
HTML define a estrutura da página — títulos, parágrafos, botões, imagens, como se fosse o esqueleto principal.

CSS estiliza essa estrutura — cores, fontes, espaçamento e layout. Sendo a aparência do site.

JavaScript dá comportamento a tudo isso, é ele quem determina o que acontece quando o usuário interage com a página, como clicar em um botão, enviar um formulário ou atualizar um conteúdo dinamicamente. Como se fosse o cerebro e seus neurônios controlando a página web.
Em resumo: HTML constrói, CSS estiliza, JavaScript faz funcionar.

# 02_script_no_html

# como funciona;
JavaScript funciona no HTML adicionando interatividade e comportamento dinâmico à estrutura estática do site, gatravés da tag <script>;
Ele atua manipulando o DOM (Document Object Model), permitindo alterar estilos, conteúdos, responder a cliques ou carregar dados sem atualizar a página.

# externos 
A melhor prática é usar arquivos externos (<script src="script.js"></script>) no final do <body> para performance.

# internos
Também pode ser interno (dentro de tags <script> na página) ou inline (eventos como onclick). 

# 03_variáveis_tipos_e_escopo

# O que é uma variável;
Uma variável é um espaço nomeado na memória do código que serve para armazenar valores para serem manipulados conforme necessário ao longo da programação. Esse valor pode ser um número, um texto, um objeto, uma lista, entre outros tipos.

# Como declarar variável em JavaScript;
Em JavaScript, a variável é declarada de acordo com 3 palavras chaves: var, let ou const, seguidas de um nome e, opcionalmente, de um valor inicial.

# Diferença entre var, let e const;
A var ele só é declarado quando a linha de leitura do código chega nele, ou seja, se vc utilizar o var e nao ter declarado ela antes, dara undefined ignorando o escopo de bloco. O let respeita o escopo de bloco e permite reatribuição de valor. O const também respeita o escopo de bloco, porém não permite que seu valor seja reatribuído após a declaração.
# Quando cada uma pode ser usada;
# O que é escopo global;
# O que é escopo de função;
# O que é escopo de bloco.