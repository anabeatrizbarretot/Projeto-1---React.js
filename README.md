# 🍳 Organizador de Receitas

Aplicação web desenvolvida para a disciplina **Programação Web Fullstack**, utilizando **React.js**, com o objetivo de facilitar a pesquisa, organização e visualização de receitas.

O sistema permite pesquisar receitas por nome ou ingrediente, filtrar por categoria, visualizar detalhes e adicionar receitas aos favoritos.

---

## 📚 Sobre o projeto

O **Organizador de Receitas** é uma aplicação desenvolvida no formato **SPA (Single Page Application)**, na qual as funcionalidades são executadas em uma única página, sem a necessidade de recarregar a aplicação durante a navegação.

Os dados das receitas são obtidos por meio de uma **API JSON aberta**, utilizando requisições AJAX.

O projeto foi desenvolvido como parte da disciplina **Programação Web Fullstack** e tem como objetivo aplicar conceitos de desenvolvimento frontend utilizando React.js.

---

## 🎯 Objetivos

### Objetivo geral

Desenvolver uma aplicação web utilizando React.js capaz de consumir dados de uma API externa e disponibilizar funcionalidades para pesquisa, filtragem, visualização e organização de receitas.

### Objetivos específicos

* Pesquisar receitas pelo nome;
* Pesquisar receitas por ingrediente;
* Consultar dados de uma API JSON;
* Exibir receitas encontradas;
* Visualizar detalhes das receitas;
* Filtrar receitas por categoria;
* Adicionar receitas aos favoritos;
* Remover receitas dos favoritos;
* Visualizar a lista de receitas favoritas;
* Trabalhar com estados utilizando `useReducer`;
* Utilizar uma biblioteca externa junto ao React.js;
* Desenvolver uma interface responsiva e simples de utilizar.

---

## 🚀 Funcionalidades

### 🔎 Pesquisa por receita

O usuário poderá pesquisar receitas pelo nome utilizando a barra de pesquisa.

### 🥕 Pesquisa por ingrediente

O usuário poderá informar um ingrediente para encontrar receitas que utilizem esse ingrediente.

### 🗂️ Filtro por categoria

As receitas poderão ser filtradas de acordo com suas categorias.

Exemplos:

* Beef
* Chicken
* Dessert
* Pasta
* Seafood
* Vegetarian

### 📖 Detalhes da receita

Ao selecionar uma receita, o sistema exibirá informações como:

* Nome;
* Imagem;
* Categoria;
* Origem;
* Ingredientes;
* Medidas;
* Modo de preparo.

### ❤️ Favoritos

O usuário poderá adicionar receitas aos favoritos e removê-las quando desejar.

### ⭐ Lista de favoritos

O sistema terá uma área para visualizar somente as receitas marcadas como favoritas.

### ⏳ Carregamento

Enquanto os dados estiverem sendo buscados na API, o sistema apresentará uma indicação de carregamento.

### ⚠️ Tratamento de erros

Caso ocorra algum problema na comunicação com a API, o sistema apresentará uma mensagem informando o usuário.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia       | Utilização                                  |
| ---------------- | ------------------------------------------- |
| React.js         | Desenvolvimento da aplicação                |
| JavaScript       | Lógica do sistema                           |
| Vite             | Ferramenta de criação e execução do projeto |
| AJAX / Fetch API | Comunicação com a API                       |
| TheMealDB API    | Fonte dos dados das receitas                |
| useReducer       | Gerenciamento dos estados da aplicação      |
| React Bootstrap  | Componentes e estilização da interface      |
| CSS              | Personalização da interface                 |
| Git              | Controle de versão                          |
| GitHub           | Hospedagem do código                        |

---

## 🌐 API utilizada

O projeto utiliza a **TheMealDB API**, uma API pública que disponibiliza informações sobre receitas.

A API fornece dados como:

* nome da receita;
* imagem;
* categoria;
* origem;
* ingredientes;
* medidas;
* modo de preparo.

Documentação da API:



---

## ⚛️ Hook utilizado

### useReducer

O projeto utiliza o Hook `useReducer` para auxiliar no gerenciamento dos estados da aplicação.

Ele poderá ser utilizado para controlar estados como:

* receitas;
* receitas favoritas;
* carregamento;
* erros;
* resultados das pesquisas;
* categoria selecionada.

O uso do `useReducer` permite organizar melhor as alterações de estado que acontecem durante a utilização do sistema.

---

## 🎨 Biblioteca utilizada

### React Bootstrap

A biblioteca **React Bootstrap** será utilizada para auxiliar na construção da interface.

Ela poderá ser utilizada em componentes como:

* Navbar;
* Cards;
* Buttons;
* Forms;
* Modal;
* Alert;
* Spinner;
* Grid.

A utilização da biblioteca também facilita a criação de uma interface responsiva.

---

## 📱 Responsividade

A aplicação será desenvolvida para funcionar em diferentes tamanhos de tela, incluindo:

* 💻 Computadores;
* 📱 Celulares;
* 📲 Tablets.

A interface será organizada para que os componentes se adaptem ao tamanho disponível da tela.

---

## 📋 Requisitos do sistema

Os requisitos do projeto estão documentados na pasta:

```text
requisitos/
```

Nela estão disponíveis:

* Requisitos Funcionais;
* Requisitos Não Funcionais.

### Requisitos funcionais principais

* Pesquisar receitas;
* Consultar a API;
* Exibir receitas;
* Visualizar detalhes;
* Favoritar receitas;
* Remover favoritos;
* Visualizar favoritos;
* Filtrar por categoria;
* Buscar por ingrediente;
* Informar carregamento;
* Informar erros.

### Requisitos não funcionais principais

* React.js;
* SPA;
* AJAX;
* API JSON;
* `useReducer`;
* Biblioteca externa;
* Responsividade;
* Organização do código;
* GitHub;
* Usabilidade;
* Desempenho;
* Tratamento de erros.

---

## 📁 Estrutura do projeto


## 👥 Equipe

| Integrante                       | Responsabilidade |
| -------------------------------- | ---------------- |
| **Ana Beatriz Barreto Teixeira** | Interface e detalhes  |
| **Livia Pontes Argenton**        | Favoritos e filtros   |
| **João Miguel Dias Rosa**        | API e pesquisa        |

Cada integrante será responsável por uma parte definida da aplicação e deverá registrar suas atividades por meio de commits no GitHub.

---

## 🌿 Organização dos commits

Durante o desenvolvimento serão utilizados commits para registrar as atividades realizadas por cada integrante.

Exemplos:

```text
feat: adiciona pesquisa de receitas
feat: cria componente CardReceita
feat: implementa sistema de favoritos
feat: adiciona filtro por categoria
fix: corrige busca por ingrediente
style: ajusta responsividade
docs: atualiza documentação da API
```

---

## 📌 Organização das branches

Quando necessário, poderão ser utilizadas branches para separar o desenvolvimento das funcionalidades.

Exemplo:

```text
main
│
├── feature/pesquisa
├── feature/favoritos
├── feature/filtros
└── feature/interface
```

A branch `main` será utilizada para manter a versão principal e integrada do projeto.

---

## 💻 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entrar na pasta

```bash
cd organizador-de-receitas
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o projeto

```bash
npm run dev
```

### 5. Acessar no navegador

O Vite apresentará o endereço local da aplicação, normalmente:

```text
http://localhost:5173
```

---

## 📌 Status do projeto

🚧 **Em desenvolvimento**

### Etapas planejadas

* [x] Definição do tema
* [x] Definição dos requisitos
* [x] Escolha da API
* [x] Escolha do Hook
* [x] Escolha da biblioteca
* [ ] Configuração do projeto React
* [ ] Implementação da API
* [ ] Implementação da pesquisa
* [ ] Implementação dos filtros
* [ ] Implementação dos favoritos
* [ ] Implementação dos detalhes das receitas
* [ ] Responsividade
* [ ] Testes
* [ ] Documentação final
* [ ] Apresentação

---

## 🤖 Uso de ferramentas de apoio e IA

Durante o desenvolvimento do projeto poderão ser utilizadas ferramentas de apoio, incluindo Inteligência Artificial, para auxiliar na pesquisa, compreensão de conceitos, identificação de erros e desenvolvimento do código.

Todo uso de ferramentas de IA será documentado de acordo com as orientações da disciplina.

As ferramentas utilizadas e suas respectivas contribuições serão registradas na documentação do projeto.

---

## 📄 Documentação

A documentação do projeto será organizada nas seguintes áreas:

```text
documentacao/
```

### Documentos previstos

* `API.md` — informações sobre a API utilizada;
* `Hook.md` — explicação sobre o uso do `useReducer`;
* `Biblioteca.md` — informações sobre o React Bootstrap;
* `Uso-de-IA.md` — ferramentas de IA utilizadas durante o desenvolvimento.

---

## 🎓 Disciplina

**Programação Web Fullstack**

**Projeto 1 – ReactJS**

Desenvolvido para fins acadêmicos.

---

## 📅 Informações do projeto

**Curso:** Análise e Desenvolvimento de Sistemas
**Instituição:** UTFPR
**Projeto:** Organizador de Receitas
**Tecnologia principal:** React.js
**Status:** Em desenvolvimento
