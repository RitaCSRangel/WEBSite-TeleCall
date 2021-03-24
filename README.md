<h1>FALE +</h1>

<p>Projeto desenvolvido em resposta ao desafio proposto para a vaga de Desenvolvedor da lolDesign. Neste documento estarão especificados todos os passos necessários para o uso da aplicação e seus testes. Para fim de testes o framework de testes Jest está sendo utilizado.</p>

<h2>Utilização da aplicação:</h2>
<p>Esse aplicação conta com apenas duas páginas: index e simular. </p>
<br>
<p>INDEX: A página index diz respeito a página inicial onde foram adicionados logo (header), links de navegação (nav) e a descrição do projeto junto a um botão que leva até a página de simulação (main). Esxeto pelo botão de simulação nenhum outro link dessa página foi implementado.</p>
<br>
<p>SIMULAR: A página simulação é onde o backend interno da aplicação roda, aqui o usuário pode selecionar/inserir as
informações referentes ao cálculo dos valores com e sem os planos da telzir. Ao lado foram dispostos dois cards que
mostrarão os resultados uma vez que o botão de simular for clicado e todas as informações forem fornecidas. Para o bom
funcionamento deste script foram usados os princípios de programação orientada a objetos na confecção de uma classe reutilizável chamada Simulacao. Essa classe fornece os atributos e métodos vitais para a execução da aplicação ao trabalhar com os inputs do usuário. Foram também adicionados try-catches para validar as informações vindas do usuário e testes usando o framework jet nas funções de cálculo.</p>
<br>
<br>
<p>PASSO-A-PASSO DA APLICAÇÃO:
    1. Abrir a página Index.
    2. Clicar no botão de Simular.
    3. Escolher um DDD de Origem. 
    4. Escolher um DDD de Destino.
    Nota: O DDD de origem deve ser escolhido antes do DDD de Destino, pois as opções de destino são geradas a 
    partir da escolha do DDD de origem. 
    5. Escolher o Plano.
    6. Inserir um tempo válido (maior do que 0)
    7. Clicar em simular.    
</p>
<br>
<br>
<p>PASSO-A-PASSO DO TESTE:
    1. Abrir o projeto em um editor de código.
    Nota: O projeto foi desenvolvido no Visual Studio Code.
    2. Procurar pelo arquivo falemais.test.js para visualizar os testes.
    3. No terminal rode o comando "npm test" para realizar os testes e espere os resultados que serão
    mostrados no terminal.
</p>