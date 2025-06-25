# 📦 API de Produtos — Node.js + Express

Esta é uma API REST simples e organizada para gerenciamento de produtos, construída com Node.js e Express. Ela permite listar, cadastrar, atualizar e deletar produtos, com validação de dados via middleware.

> Projeto criado para fins educacionais com foco em arquitetura limpa, modularidade e boas práticas de desenvolvimento back-end.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express.js
- Insomnia (testes de rota)
- JavaScript (ES6)
- Estrutura MVC simplificada

---

## 🗂️ Estrutura de pastas

```
projeto/
├── index.js
├── routes/
│   └── produtos.js
├── controllers/
│   └── produtoController.js
├── middlewares/
│   └── validarProduto.js
└── dados/
    └── produtos.js
```

---

## 📌 Funcionalidades

- ✅ Listar todos os produtos
- ✅ Cadastrar novo produto com validação
- ✅ Atualizar produto existente
- ✅ Remover produto pelo ID
- ⚙ Dados armazenados temporariamente em memória (sem banco de dados ainda)

---

## ▶️ Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/Thiago-c0d3r/CRUD-SIMPLES.git
cd CRUD-SIMPLES
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor

```bash
node index.js
```

O servidor estará rodando em:
```
http://localhost:3000
```

*(ou outra porta, dependendo da configuração)*

---

## 📫 Endpoints da API

| Método | Rota              | Descrição                        |
|--------|-------------------|----------------------------------|
| GET    | `/produtos`       | Lista todos os produtos          |
| POST   | `/produtos`       | Cadastra um novo produto         |
| PUT    | `/produtos/:id`   | Atualiza um produto existente    |
| DELETE | `/produtos/:id`   | Remove um produto por ID         |

---

## 🔒 Validação (Middleware)

O middleware `validarProduto.js` impede que sejam enviados produtos sem nome ou preço.

```json
{
  "nome": "Teclado Mecânico",
  "preco": 199.90
}
```

Se faltar algum campo, a API retorna:

```json
{
  "erro": "Nome e preço obrigatórios"
}
```

---

## 🧪 Exemplo de teste no Insomnia

### POST `/produtos`

- Body (JSON):
```json
{
  "nome": "Mouse Gamer",
  "preco": 150.00
}
```

### PUT `/produtos/1`

```json
{
  "nome": "Mouse Gamer Atualizado",
  "preco": 180.00
}
```

---

## 👨‍💻 Desenvolvedor

**Thiago Sousa**  
Back-end Developer em formação  
📆 Curso com foco em mercado  
📚 Projeto construído com apoio do Jarvis (ChatGPT personalizado)

---

## 🧠 Aprendizados aplicados

- Arquitetura RESTful
- Modularização com Express Router
- Validação com middleware
- Organização por responsabilidades (MVC)
- Uso de métodos HTTP: GET, POST, PUT, DELETE
- Testes no Insomnia

---

## 📈 Próximos passos

- [ ] Persistência com PostgreSQL  
- [ ] Autenticação com JWT  
- [ ] Testes automatizados com Jest  
- [ ] Deploy com Docker
