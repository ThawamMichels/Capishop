# n8n-nodes-capishop

Este é um custom node do n8n para integração completa com a API da Nuvemshop (Tiendanube).

## 🚀 Recursos

O **CAPIShop** oferece integração completa com os seguintes recursos da Nuvemshop:

- ✅ **Products** - Criar, listar, atualizar e deletar produtos
- ✅ **Orders** - Gerenciar pedidos da loja
- ✅ **Customers** - Gerenciar clientes
- ✅ **Categories** - Gerenciar categorias de produtos
- ✅ **Variants** - Listar variantes de produtos
- ✅ **Images** - Gerenciar imagens de produtos
- ✅ **Coupons** - Listar cupons de desconto
- ✅ **Webhooks** - Configurar webhooks
- ✅ **Scripts** - Listar scripts da loja
- ✅ **Transactions** - Listar transações
- ✅ **Locations** - Listar localizações
- ✅ **Pages** - Listar páginas da loja
- ✅ **Abandoned Carts** - Listar carrinhos abandonados
- ✅ **Fulfillments** - Listar fulfillments
- ✅ **Metafields** - Listar metafields

## 📦 Instalação

### Instalação via npm

```bash
npm install n8n-nodes-capishop
```

### Instalação via Community Nodes (n8n)

1. Acesse sua instância do n8n
2. Vá em **Settings** > **Community Nodes**
3. Clique em **Install**
4. Digite: `n8n-nodes-capishop`
5. Clique em **Install**

## 🔐 Credenciais

Para usar este node, você precisa configurar as credenciais da Nuvemshop:

1. **Store ID** - ID da sua loja Nuvemshop
2. **Access Token** - Token de acesso OAuth da API
3. **User Agent** - Identificação para as requisições (ex: "MeuApp (contato@email.com)")

### Como obter as credenciais

1. Acesse o [Painel de Administração da Nuvemshop](https://www.nuvemshop.com.br/)
2. Vá em **Aplicativos** > **Desenvolver aplicativos**
3. Crie um novo aplicativo ou use um existente
4. Copie o **Store ID** e **Access Token**

## 💡 Exemplos de Uso

### Listar todos os produtos

1. Adicione o node **CAPIShop** ao workflow
2. Selecione **Resource**: `Product`
3. Selecione **Operation**: `Get All`
4. Configure **Return All**: `true` (ou defina um limite)

### Criar um novo produto

1. Adicione o node **CAPIShop** ao workflow
2. Selecione **Resource**: `Product`
3. Selecione **Operation**: `Create`
4. Preencha o campo **Product Data (JSON)** com os dados do produto:

```json
{
  "name": {
    "pt": "Produto Exemplo"
  },
  "description": {
    "pt": "Descrição do produto"
  },
  "price": "99.90",
  "stock": 10,
  "published": true
}
```

### Atualizar um pedido

1. Adicione o node **CAPIShop** ao workflow
2. Selecione **Resource**: `Order`
3. Selecione **Operation**: `Update`
4. Preencha **Order ID** com o ID do pedido
5. Preencha **Update Data (JSON)**:

```json
{
  "status": "closed",
  "note": "Pedido processado com sucesso"
}
```

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js >= 18.x
- npm ou yarn
- n8n instalado localmente

### Configuração do ambiente de desenvolvimento

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/n8n-nodes-capishop.git
cd n8n-nodes-capishop

# Instale as dependências
npm install

# Compile o projeto
npm run build

# Link localmente para testes
npm link
```

### Testar localmente

```bash
# Em outra pasta com n8n instalado
npm link n8n-nodes-capishop

# Inicie o n8n
n8n start
```

## 📚 Documentação da API

Para mais informações sobre a API da Nuvemshop, consulte:
- [Documentação Oficial da API Nuvemshop](https://tiendanube.github.io/api-documentation/)

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Suporte

Para suporte e dúvidas:
- Abra uma [issue no GitHub](https://github.com/SEU_USUARIO/n8n-nodes-capishop/issues)
- Email: seu@email.com

## 🙏 Agradecimentos

- [n8n](https://n8n.io/) - Plataforma de automação de workflows
- [Nuvemshop](https://www.nuvemshop.com.br/) - Plataforma de e-commerce

---

Desenvolvido com ❤️ para a comunidade n8n
