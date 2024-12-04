
# Projeto Universitário - UNIESP

Este é um projeto desenvolvido em **React** utilizando o **Vite** como bundler. Ele simula o site de uma universidade chamado **UNIESP**, permitindo aos usuários navegar pelas páginas principais e aos administradores gerenciar notícias. 

---

## Estrutura do Projeto

- **public/**: Contém imagens públicas acessíveis diretamente pela aplicação.
- **src/**:
  - **assets/**: Armazena imagens privadas.
  - **components/**:
    - `BannerAd.jsx`: Componente de banner publicitário.
    - `Navbar.jsx`: Componente da barra de navegação.
  - **pages/**:
    - `Faculdade.jsx`: Página sobre a faculdade.
    - `DpoLgpd.jsx`: Página com informações de LGPD/DPO.
    - `Inicial.jsx`: Página inicial.
    - `Noticias.jsx`: Página com as notícias.
    - `VizualizaNoticia.jsx`: Página para visualizar detalhes de uma notícia.
  - **Admin/**:
    - `AdminNoticias.jsx`: Página principal para gerenciar notícias.
    - `CadastroNoticia.jsx`: Página para cadastrar novas notícias.
    - `EditarNoticias.jsx`: Página para editar notícias existentes.
- **data/**:
  - `db.json`: Arquivo usado como backend fake para armazenar notícias via `json-server`.
- **App.jsx**: Gerencia as rotas entre todas as páginas.

---

## Bibliotecas Usadas

1. **Vite** - Para o bundling e inicialização rápida do projeto.
2. **React Router DOM** - Para gerenciar as rotas do aplicativo.
3. **Material UI (MUI)** - Para estilização e componentes visuais.
4. **Axios** - Para fazer requisições HTTP.
5. **json-server** - Para simular um backend.

---

## Como Configurar o Projeto

### Requisitos
- Node.js instalado
- Gerenciador de pacotes `npm` ou `yarn`

### Instalar o Node.js

#### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install -y nodejs npm
node -v
npm -v
```

#### Windows:
1. Baixe o instalador do Node.js do site oficial: [https://nodejs.org/](https://nodejs.org/).
2. Execute o instalador e siga as instruções.
3. Verifique a instalação no terminal ou prompt de comando:
   ```bash
   node -v
   npm -v
   ```

---

## Como Iniciar o Projeto

1. Clone o repositório do projeto:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd UNIESP
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Inicie o frontend:
   ```bash
   npm run dev
   ```

4. Inicie o backend fake com o `json-server`:
   ```bash
   npm run server
   ```

---

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento para o frontend.
- `npm run server`: Inicia o backend fake utilizando `json-server`.

---

## Instalação das Bibliotecas

1. **React Router DOM**:
   ```bash
   npm install react-router-dom
   ```

2. **Material UI (MUI)**:
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```

3. **Axios**:
   ```bash
   npm install axios
   ```

4. **json-server**:
   ```bash
   npm install json-server --save-dev
   ```

---

## Desenvolvimento

Após iniciar o projeto, acesse as páginas usando o navegador:

- Página inicial: [http://localhost:5173](http://localhost:5173)
- Backend fake: [http://localhost:3000](http://localhost:3000)

---

Desenvolvido por **Equipe UNIESP** com React, Vite e amor ❤️.
