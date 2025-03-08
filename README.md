# Projeto e-motors

Este é um projeto de uma página responsiva que simula a interface de uma concessionária de veículos. A página inclui diversas funcionalidades como cabeçalho com menu hamburguer, carousel de imagens, seções de destaque e promoções de veículos, além de um formulário de contato com validação.

## Funcionalidades

### 1. Cabeçalho com Menu Hamburguer
- O cabeçalho contém um menu de navegação com links para diferentes seções do site.
- Em dispositivos móveis, o menu é exibido como um **menu hamburguer**, que pode ser aberto e fechado ao clicar no ícone de três linhas, utilizando **jQuery** para controlar o comportamento.

### 2. Carousel de Imagens
- Utilizando a biblioteca **Slick Carousel**, foi criado um carousel com 3 imagens que podem ser navegadas.
- A biblioteca permite transições suaves entre as imagens, oferecendo uma boa experiência ao usuário.

### 3. Seção "Sobre"
- Uma seção informativa sobre a marca ou produto foi criada.
- Contém texto descritivo e uma imagem que complementa o conteúdo, utilizando um layout flexível.

### 4. Seção de Destaques e Promoções
- Foi criada uma área de **itens em destaque** e **promoções**, onde são listados veículos com informações como nome, preço e uma breve descrição.
- Cada item contém um botão de **"Tenho Interesse"**, que ao ser clicado preenche automaticamente o campo do formulário de "Veículo de Interesse" e faz a tela rolar até o formulário.

### 5. Formulário de Contato e Validação
- Um formulário de contato foi implementado para que os usuários possam enviar suas informações, como nome, telefone, e-mail e o veículo de interesse.
- A validação do formulário foi feita com **JavaScript** para garantir que os campos obrigatórios sejam preenchidos antes do envio.

### 6. Funcionalidade de Preenchimento Automático do Formulário
- Ao clicar no botão **"Tenho Interesse"** em um item, o campo do formulário "Veículo de Interesse" é automaticamente preenchido com o nome do item em destaque.
- Após o preenchimento, a tela rola automaticamente até a área do formulário para facilitar a interação com o usuário.

### 7. Responsividade
- O design da página foi projetado para ser **responsivo**, adaptando-se a diferentes tamanhos de tela, incluindo:
  - **Desktop**: Layout amplo e distribuído com múltiplas colunas.
  - **Tablet**: Ajustes no layout para melhorar a visualização em telas menores.
  - **Mobile**: A página se adapta perfeitamente a dispositivos móveis, com menus e conteúdo ajustados para telas pequenas.

## Tecnologias Utilizadas
- **HTML5**
- **CSS3** (com Media Queries para responsividade)
- **JavaScript**
- **jQuery** (para o menu hamburguer)
- **Slick Carousel** (para o carousel de imagens)

## Como Executar o Projeto

1. Clone este repositório:
   git clone https://github.com/SeuUsuario/nome-do-repositorio.git

2. Navegue até o diretório do projeto:
   cd nome-do-repositorio

3. Abra o arquivo index.html no seu navegador para visualizar o projeto em funcionamento.

## Contribuições

- Sinta-se à vontade para contribuir com este projeto! Se você encontrar algum erro ou tiver uma sugestão de melhoria, abra uma issue ou envie um pull request.
