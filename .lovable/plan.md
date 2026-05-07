## Objetivo

Criar um painel administrativo para gerenciar os projetos exibidos na seção **"O que podemos criar para você"** da página inicial (e também da página `/portfolio`), permitindo adicionar, editar e remover projetos com imagem, nome e descrição — sem precisar mexer no código.

## Como vai funcionar

1. **Login do administrador** em `/admin/login` (apenas você acessa).
2. **Painel** em `/admin` com lista de projetos cadastrados, opção de adicionar novo, editar ou excluir.
3. **Formulário** com upload de imagem, nome do site, descrição, URL do site e categoria (Landing Page / Site Institucional).
4. **Página inicial** passa a buscar os projetos do banco de dados em vez do array fixo no código. Os projetos atuais (Barbearia Henrique, Sorvete Muito Bom, Lavajato, Flat Rainha) serão migrados para o banco como dados iniciais.

## Detalhes técnicos

**Banco de dados (Lovable Cloud):**
- Tabela `projects`: `id`, `name`, `description`, `url`, `image_path`, `category` (enum: 'landing' | 'institutional'), `display_order`, `created_at`.
- Tabela `user_roles` + enum `app_role` ('admin') + função `has_role()` (padrão seguro de roles).
- RLS:
  - `SELECT` público em `projects` (qualquer visitante vê).
  - `INSERT/UPDATE/DELETE` apenas para usuários com role `admin`.
- Bucket de storage `project-images` (público) para hospedar as imagens enviadas.
- Migração inicial insere os 4 projetos atuais.

**Autenticação:**
- Email + senha (sem confirmação de email para facilitar o acesso do admin).
- Após você criar sua conta, eu te oriento a rodar um comando SQL único para se promover a `admin` (ou já deixo um email pré-configurado, se preferir).
- Página `/admin/login` redireciona ao painel após login.
- Rota `/admin` protegida — não-admins são redirecionados.

**Páginas e componentes novos:**
- `src/pages/AdminLogin.tsx` — formulário de login.
- `src/pages/Admin.tsx` — lista de projetos + botão "Novo Projeto" + ações editar/excluir.
- `src/components/admin/ProjectForm.tsx` — modal/formulário com upload de imagem (Storage), campos nome, descrição, URL, categoria.
- `src/hooks/useProjects.ts` — busca projetos do Supabase.

**Alterações em arquivos existentes:**
- `src/components/Portfolio.tsx` — em vez do array `portfolioData` fixo, busca os projetos do banco e agrupa por categoria.
- `src/pages/PortfolioPage.tsx` — também passa a usar os dados do banco na galeria de projetos.
- `src/App.tsx` — adiciona rotas `/admin/login` e `/admin`.

## Pergunta antes de começar

Para a tela de login do admin, posso usar o email que você já usa no Lovable, ou prefere informar um email específico para administrar o site?

Você também quer um link discreto para o painel admin no rodapé, ou prefere acessar apenas digitando `/admin/login` direto na URL (mais seguro/oculto)?
