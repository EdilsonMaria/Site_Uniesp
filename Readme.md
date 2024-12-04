
# Projeto Universitário - UNIESP

Este é um projeto desenvolvido em **React** utilizando o **Vite** como bundler. Ele simula o site de uma universidade chamado **UNIESP**, permitindo aos usuários navegar pelas páginas principais e aos administradores gerenciar notícias. 
A aplicação está hospedada no Railway e pode ser acessada pelo seguinte link:

➡️ **[Site UNIESP](https://site-uniesp.up.railway.app/)**

---

## Estrutura do Projeto

- **data/**:
  - `db.json`: Arquivo usado como backend fake para armazenar notícias utilizando `json-server`.
- **public/**: Contém imagens públicas acessíveis diretamente pela aplicação.
- **src/**:
  - **assets/**: Armazena imagens privadas.
  - **components/**:
    - `BannerAd.jsx`: Componente de banner publicitário exibido na página inicial.
    - `Navbar.jsx`: Componente da barra de navegação, permitindo acesso às diferentes páginas do site.
  - **pages/**:
    - `Faculdade.jsx`: Página com informações sobre a faculdade.
    - `DpoLgpd.jsx`: Página dedicada à LGPD (Lei Geral de Proteção de Dados) e informações sobre DPO.
    - `Inicial.jsx`: Página inicial do site universitário.
    - `Noticias.jsx`: Página com a listagem de notícias publicadas.
    - `VizualizaNoticia.jsx`: Página que exibe os detalhes de uma notícia específica.
    - **Admin/**:
       - `AdminNoticias.jsx`: Página principal para administradores gerenciarem notícias.
      - `CadastroNoticia.jsx`: Página para cadastrar novas notícias no sistema.
      - `EditarNoticias.jsx`: Página para editar ou atualizar notícias existentes.
- **App.jsx**: Arquivo principal que gerencia as rotas entre todas as páginas.

---

## Funcionalidades do Projeto

- **Público Geral**:
  - Acessar a página inicial com informações principais.
  - Navegar para a página de notícias e visualizar notícias detalhadas.
  - Acessar a página com informações sobre LGPD e DPO.

- **Administradores**:
  - Adicionar novas notícias.
  - Editar ou atualizar notícias existentes.
  - Remover notícias desnecessárias.

---

## Bibliotecas Usadas e Funcionalidades

1. **Vite**:
   - Fornece uma maneira rápida e eficiente de criar projetos React.
   - Oferece um servidor de desenvolvimento rápido com suporte a hot module replacement (HMR).

   **Instalação**:
   ```bash
   npm create vite@latest
   ```

2. **React Router DOM**:
   - Gerencia as rotas no aplicativo React.
   - Permite criar links dinâmicos e URLs amigáveis.
   - Garante navegação sem recarregar a página.

   **Instalação**:
   ```bash
   npm install react-router-dom
   ```

3. **Material UI (MUI)**:
   - Biblioteca de componentes React prontos para uso.
   - Facilita a criação de interfaces modernas e responsivas.
   - Inclui temas e estilizações avançadas.

   **Instalação**:
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```

4. **Axios**:
   - Biblioteca para fazer requisições HTTP.
   - Facilita a comunicação com APIs.
   - Suporta interceptores para gerenciar tokens de autenticação e erros.

   **Instalação**:
   ```bash
   npm install axios
   ```

5. **json-server**:
   - Simula um backend para desenvolvimento rápido.
   - Permite criar endpoints RESTful a partir de um arquivo JSON.

   **Instalação**:
   ```bash
   npm install json-server --save-dev
   ```

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

## Desenvolvimento

Após iniciar o projeto, acesse as páginas usando o navegador:

- Página inicial: [http://localhost:5173](http://localhost:5173)
- Backend fake: [http://localhost:3000](http://localhost:3000)

---
