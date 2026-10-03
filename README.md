# 🍳 Organizador de Receitas

Aplicação web desenvolvida para a disciplina **Programação Web Fullstack**, utilizando **React.js**, com o objetivo de facilitar a pesquisa, visualização e organização de receitas.

O sistema permite pesquisar receitas **por nome ou ingrediente**, explorar receitas por categoria, visualizar informações detalhadas e salvar receitas favoritas.

---

## 📚 Sobre o projeto

O **Organizador de Receitas** é uma aplicação desenvolvida no formato **SPA (Single Page Application)**, permitindo que o usuário utilize as funcionalidades do sistema sem recarregar a página durante a navegação.

Os dados das receitas são obtidos por meio da **TheMealDB API**, uma API JSON pública, utilizando requisições assíncronas através da **Fetch API**.

O projeto aplica conceitos de desenvolvimento frontend com React.js, incluindo:

- Componentização;
- Hooks;
- Gerenciamento de estados;
- Requisições assíncronas;
- Consumo de API externa;
- Persistência local de dados;
- Responsividade;
- Tratamento de erros e estados de carregamento.

---

## 🎯 Objetivo

Desenvolver uma aplicação web utilizando React.js capaz de consumir dados de uma API externa e disponibilizar funcionalidades para pesquisa, filtragem, visualização e organização de receitas.

### Objetivos específicos

- Pesquisar receitas pelo nome;
- Pesquisar receitas por ingrediente;
- Consultar dados de uma API JSON;
- Exibir receitas encontradas;
- Explorar receitas por categoria;
- Visualizar detalhes das receitas;
- Adicionar receitas aos favoritos;
- Remover receitas dos favoritos;
- Visualizar a lista de receitas favoritas;
- Filtrar receitas favoritas por categoria;
- Persistir os favoritos no navegador;
- Utilizar o Hook `useReducer`;
- Utilizar uma biblioteca externa integrada ao React.js;
- Disponibilizar uma interface responsiva e de fácil utilização.

---

## 🚀 Funcionalidades

### 🔎 Pesquisa por nome

O usuário pode pesquisar receitas informando o nome de um prato.

A aplicação consulta a TheMealDB e apresenta as receitas encontradas.

---

### 🥕 Pesquisa por ingrediente

O usuário pode selecionar a opção de pesquisa por ingrediente e informar um ingrediente para localizar receitas que o utilizem.

Exemplos:

- Chicken;
- Beef;
- Salmon;
- Garlic.

A busca por ingrediente utiliza os recursos disponibilizados pela TheMealDB API.

---

### 🗂️ Exploração por categoria

O usuário pode visualizar receitas de acordo com as categorias disponibilizadas pela API.

Exemplos:

- Beef;
- Breakfast;
- Chicken;
- Dessert;
- Pasta;
- Seafood;
- Vegetarian.

Os filtros também podem ser utilizados nos resultados das pesquisas.

---

### 📖 Detalhes da receita

Ao selecionar uma receita, o sistema apresenta seus detalhes em uma janela modal, incluindo informações como:

- Nome;
- Imagem;
- Categoria;
- Origem;
- Ingredientes;
- Medidas;
- Modo de preparo.

---

### ❤️ Favoritos

O usuário pode adicionar ou remover receitas da lista de favoritos.

Os favoritos são armazenados utilizando o **localStorage** do navegador, permitindo que permaneçam salvos mesmo após a atualização ou fechamento da página.

---

### ⭐ Lista de favoritos

A aplicação possui uma área específica para visualizar as receitas adicionadas aos favoritos.

Também é possível filtrar as receitas favoritas por categoria.

---

### ⏳ Estado de carregamento

Durante as requisições realizadas à API, a aplicação apresenta uma mensagem informando que as receitas estão sendo carregadas.

---

### ⚠️ Tratamento de erros

Caso ocorra algum problema durante a comunicação com a API, o sistema informa o usuário por meio de uma mensagem de erro.

Também são apresentadas mensagens quando nenhuma receita é encontrada para determinada pesquisa ou filtro.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
| --- | --- |
| **React.js** | Desenvolvimento da aplicação e componentização |
| **JavaScript** | Lógica e funcionamento do sistema |
| **Vite** | Ambiente de desenvolvimento e build |
| **Fetch API / AJAX** | Comunicação assíncrona com a API |
| **TheMealDB API** | Fonte dos dados das receitas |
| **useReducer** | Gerenciamento dos favoritos e filtros |
| **useState** | Gerenciamento dos estados da interface |
| **useEffect** | Execução de efeitos e sincronização dos favoritos |
| **useMemo** | Otimização e processamento de listas |
| **useRef** | Controle das requisições realizadas |
| **React Bootstrap** | Componentes da interface |
| **Bootstrap** | Estrutura visual e responsividade |
| **CSS** | Personalização da interface |
| **localStorage** | Persistência das receitas favoritas |
| **Git** | Controle de versão |
| **GitHub** | Hospedagem e versionamento do código |

---

## 🌐 API utilizada

O projeto utiliza a **TheMealDB API**, uma API pública voltada para consulta de receitas.

Documentação oficial:

https://www.themealdb.com/api.php

Entre os recursos da API utilizados pelo projeto estão:

```text
search.php?s=
```

Pesquisa de receitas pelo nome.

```text
filter.php?i=
```

Pesquisa de receitas por ingrediente.

```text
filter.php?c=
```

Pesquisa de receitas por categoria.

```text
lookup.php?i=
```

Consulta dos detalhes de uma receita utilizando seu identificador.

```text
list.php?c=list
```

Consulta da lista de categorias disponíveis.

---

## ⚛️ Hook principal — useReducer

O Hook selecionado para o projeto foi o **`useReducer`**.

Ele é utilizado para centralizar o gerenciamento de estados relacionados aos:

- Favoritos;
- Adição de favoritos;
- Remoção de favoritos;
- Categoria selecionada na página de exploração;
- Categoria selecionada na página de favoritos.

As ações utilizadas pelo reducer incluem:

```text
ADICIONAR_FAVORITO
REMOVER_FAVORITO
DEFINIR_CATEGORIA
```

A utilização do `useReducer` permite concentrar as regras de alteração desses estados em um único local, facilitando a organização e manutenção do código.

---

## 🎨 Biblioteca externa — React Bootstrap

A biblioteca externa escolhida para o projeto foi o **React Bootstrap**.

Ela é utilizada na construção de diferentes elementos da interface, incluindo:

- Navbar;
- Formulários;
- Botões;
- Grid;
- Modal;
- Alertas;
- Badges;
- Containers.

O React Bootstrap também auxilia na criação de uma interface responsiva integrada aos componentes React.

---

## 📱 Responsividade

A aplicação foi desenvolvida para se adaptar a diferentes tamanhos de tela, incluindo:

- 💻 Computadores;
- 📲 Tablets;
- 📱 Celulares.

Foram utilizados recursos do Bootstrap e estilos CSS próprios para adaptar os componentes e elementos da interface conforme o espaço disponível.

---

## 🤖 Ferramentas de apoio

Durante o desenvolvimento do projeto, foram utilizadas ferramentas de Inteligência Artificial como apoio pontual para:

- Esclarecimento de dúvidas relacionadas ao React.js;
- Revisão de trechos de código;
- Identificação de possíveis melhorias;
- Apoio na organização e revisão da documentação.

As decisões de implementação, testes, validação e integração das funcionalidades foram realizadas pela equipe responsável pelo projeto.

---

## 📋 Requisitos do sistema

Os requisitos funcionais e não funcionais do projeto estão disponíveis na pasta:

```text
Requisitos de Sistema/
```

### Requisitos funcionais implementados

- Pesquisa de receitas por nome;
- Pesquisa de receitas por ingrediente;
- Consulta à API;
- Exibição dos resultados;
- Visualização dos detalhes das receitas;
- Exploração e filtro por categoria;
- Adição de receitas aos favoritos;
- Remoção de receitas dos favoritos;
- Visualização dos favoritos;
- Filtro das receitas favoritas;
- Indicação de carregamento;
- Tratamento de erros;
- Mensagem para pesquisas sem resultados.

### Requisitos não funcionais

- React.js;
- SPA;
- AJAX / Fetch API;
- API JSON;
- `useReducer`;
- Biblioteca externa;
- Responsividade;
- Componentização;
- Organização do código;
- Controle de versão utilizando Git e GitHub;
- Usabilidade;
- Tratamento de erros.

---

## 📁 Estrutura do projeto

```text
Projeto-1---React.js/
│
├── README.md
│
├── Requisitos de Sistema/
│   ├── Requisitos Funcionais.md
│   └── Requisitos Não Funcionais.md
│
└── organizador-receitas/
    │
    ├── src/
    │   ├── assets/
    │   │   └── hero.png
    │   │
    │   ├── components/
    │   │   ├── CardReceita/
    │   │   │   ├── CardReceita.jsx
    │   │   │   └── CardReceita.css
    │   │   │
    │   │   ├── Favoritos/
    │   │   │   ├── Favoritos.jsx
    │   │   │   └── Favoritos.css
    │   │   │
    │   │   ├── Filtros/
    │   │   │   ├── Filtros.jsx
    │   │   │   └── Filtros.css
    │   │   │
    │   │   └── ModalReceita/
    │   │       ├── ModalReceita.jsx
    │   │       └── ModalReceita.css
    │   │
    │   ├── reducers/
    │   │   └── receitasReducer.js
    │   │
    │   ├── services/
    │   │   └── api.js
    │   │
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    │
    ├── index.html
    ├── package.json
    ├── package-lock.json
    └── vite.config.js
```

---

## 👥 Equipe

| Integrante | Responsabilidade |
| --- | --- |
| **Ana Beatriz Barreto Teixeira** | Interface e detalhes das receitas |
| **Livia Pontes Argenton** | Favoritos e filtros |
| **João Miguel Dias Rosa** | Integração com a API e pesquisas |

As atividades desenvolvidas pelos integrantes foram registradas por meio de commits no repositório do projeto.

---

## 🌿 Controle de versão

O projeto utiliza **Git e GitHub** para controle de versão.

Os commits realizados durante o desenvolvimento registram a evolução e a implementação das diferentes funcionalidades da aplicação.

Repositório:

https://github.com/anabeatrizbarretot/Projeto-1---React.js

---

## 💻 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/anabeatrizbarretot/Projeto-1---React.js.git
```

### 2. Acessar a pasta da aplicação

```bash
cd Projeto-1---React.js/organizador-receitas
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o projeto

```bash
npm run dev
```

### 5. Acessar a aplicação

Após iniciar o projeto, o Vite apresentará no terminal o endereço local da aplicação, normalmente:

```text
http://localhost:5173
```

---

## 🧪 Comandos disponíveis

Executar o ambiente de desenvolvimento:

```bash
npm run dev
```

Gerar a versão de produção:

```bash
npm run build
```

Executar a verificação do código:

```bash
npm run lint
```

Visualizar a versão de produção localmente:

```bash
npm run preview
```

---

## 📌 Status do projeto

✅ **Aplicação funcional concluída para o Projeto 1.**

Funcionalidades implementadas:

- [x] Configuração do projeto React;
- [x] Integração com a TheMealDB API;
- [x] Pesquisa por nome;
- [x] Pesquisa por ingrediente;
- [x] Exploração por categoria;
- [x] Filtros;
- [x] Sistema de favoritos;
- [x] Persistência dos favoritos;
- [x] Detalhes das receitas;
- [x] Estados de carregamento;
- [x] Tratamento de erros;
- [x] Responsividade;
- [x] Organização em componentes;
- [x] Controle de versão no GitHub;
- [x] Documentação principal do projeto.

---

## 🎓 Disciplina

**Programação Web Fullstack**

**Projeto 1 — React.js**

### Informações acadêmicas

**Curso:** Análise e Desenvolvimento de Sistemas  
**Instituição:** Universidade Tecnológica Federal do Paraná — UTFPR  
**Projeto:** Organizador de Receitas  
**Tecnologia principal:** React.js  
**Status:** Aplicação funcional concluída

---

Desenvolvido para fins acadêmicos.