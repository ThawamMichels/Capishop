# 📦 Guia de Instalação e Publicação - CAPIShop

## 🎯 Pré-requisitos

Antes de começar, certifique-se de ter:

- ✅ Node.js >= 18.x instalado
- ✅ npm ou yarn instalado
- ✅ Conta no GitHub
- ✅ Conta no npm (para publicação)
- ✅ n8n instalado (para testes locais)

## 🚀 Passo 1: Preparar o Projeto

### 1.1 Instalar Dependências

```bash
cd n8n-nodes-capishop
npm install
```

### 1.2 Compilar o Projeto

```bash
npm run build
```

Isso irá compilar todos os arquivos TypeScript para JavaScript na pasta `dist/`.

## 🧪 Passo 2: Testar Localmente

### 2.1 Link Local

```bash
# Na pasta do projeto
npm link
```

### 2.2 Usar no n8n Local

```bash
# Em outra pasta onde você tem o n8n
cd ~/.n8n
npm link n8n-nodes-capishop

# Ou se você tem n8n instalado globalmente
n8n start
```

### 2.3 Verificar no n8n

1. Abra o n8n no navegador (geralmente `http://localhost:5678`)
2. Crie um novo workflow
3. Procure por "CAPIShop" nos nodes disponíveis
4. Teste as operações com suas credenciais da Nuvemshop

## 📤 Passo 3: Publicar no GitHub

### 3.1 Inicializar Git (se ainda não foi feito)

```bash
cd n8n-nodes-capishop
git init
git add .
git commit -m "Initial commit: CAPIShop - Nuvemshop Integration"
```

### 3.2 Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com)
2. Clique em "New Repository"
3. Nome: `n8n-nodes-capishop`
4. Descrição: `CAPIShop - Nuvemshop Integration for N8N`
5. Deixe como **Public**
6. **NÃO** inicialize com README (já temos um)
7. Clique em "Create repository"

### 3.3 Push para o GitHub

```bash
git remote add origin https://github.com/SEU_USUARIO/n8n-nodes-capishop.git
git branch -M main
git push -u origin main
```

## 📦 Passo 4: Publicar no npm

### 4.1 Criar Conta no npm (se não tiver)

```bash
npm adduser
# ou
npm login
```

### 4.2 Atualizar package.json

Antes de publicar, atualize as informações no `package.json`:

```json
{
  "name": "n8n-nodes-capishop",
  "author": {
    "name": "SEU_NOME_REAL",
    "email": "seu@email.com"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/SEU_USUARIO/n8n-nodes-capishop.git"
  }
}
```

### 4.3 Publicar

```bash
# Certifique-se de que está compilado
npm run build

# Publique no npm
npm publish --access public
```

## 🎉 Passo 5: Usar o Node Publicado

### 5.1 Instalação via npm

Qualquer pessoa pode instalar agora:

```bash
npm install n8n-nodes-capishop
```

### 5.2 Instalação via n8n Community Nodes

1. Acesse sua instância do n8n
2. Vá em **Settings** > **Community Nodes**
3. Clique em **Install**
4. Digite: `n8n-nodes-capishop`
5. Clique em **Install**
6. Aguarde a instalação
7. Reinicie o n8n se necessário

## 🔄 Atualizações Futuras

### Atualizar Versão

```bash
# Atualizar versão patch (1.0.0 -> 1.0.1)
npm version patch

# Atualizar versão minor (1.0.0 -> 1.1.0)
npm version minor

# Atualizar versão major (1.0.0 -> 2.0.0)
npm version major
```

### Publicar Nova Versão

```bash
# Compilar
npm run build

# Publicar
npm publish

# Push das tags para o GitHub
git push --tags
git push
```

## 🐛 Troubleshooting

### Erro: "Module not found"

```bash
# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erro: "You do not have permission to publish"

```bash
# Verifique se está logado
npm whoami

# Se não estiver, faça login
npm login
```

### Node não aparece no n8n

1. Certifique-se de que compilou o projeto (`npm run build`)
2. Verifique se a pasta `dist/` foi criada
3. Reinicie o n8n completamente
4. Limpe o cache do navegador

### Erro de TypeScript

```bash
# Instale o TypeScript globalmente
npm install -g typescript

# Compile novamente
npm run build
```

## 📝 Checklist de Publicação

Antes de publicar, verifique:

- [ ] Todas as dependências instaladas
- [ ] Projeto compilado sem erros (`npm run build`)
- [ ] Testes locais realizados com sucesso
- [ ] `package.json` atualizado com informações corretas
- [ ] README.md completo e atualizado
- [ ] LICENSE incluída
- [ ] `.gitignore` configurado
- [ ] Código commitado no GitHub
- [ ] Versão atualizada no `package.json`
- [ ] Logado no npm (`npm whoami`)

## 🎓 Recursos Adicionais

- [Documentação n8n - Creating Nodes](https://docs.n8n.io/integrations/creating-nodes/)
- [npm Documentation](https://docs.npmjs.com/)
- [API Nuvemshop](https://tiendanube.github.io/api-documentation/)

---

✨ **Pronto!** Seu custom node está publicado e disponível para toda a comunidade n8n!
