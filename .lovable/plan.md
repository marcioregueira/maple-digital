

# Plano: Formulário de Contato com Banco de Dados + Resend

## Resumo

Vamos implementar uma solução profissional para o formulário de contato que:
1. Salva todas as mensagens no banco de dados do Lovable Cloud
2. Envia um e-mail de notificacao para voce via Resend
3. Mostra feedback visual ao usuario durante o envio

---

## O que voce precisa fazer antes

Antes de comecar a implementacao, voce precisara:

1. **Criar uma conta no Resend** (se ainda nao tiver): https://resend.com
2. **Verificar seu dominio** (ou usar o dominio de teste): https://resend.com/domains
3. **Criar uma API Key**: https://resend.com/api-keys
4. **Fornecer a API Key** quando eu solicitar

---

## Etapas da Implementacao

### Etapa 1: Criar tabela de contatos no banco de dados

Criaremos uma tabela `contacts` para armazenar todas as mensagens do formulario:

```text
+------------------+
|     contacts     |
+------------------+
| id (uuid)        |
| name (text)      |
| email (text)     |
| phone (text)     |
| project_type     |
| message (text)   |
| created_at       |
+------------------+
```

**Politica de seguranca (RLS):**
- Qualquer pessoa pode inserir (para enviar mensagens)
- Ninguem pode ler diretamente (protege os dados dos contatos)

### Etapa 2: Criar funcao backend para envio de e-mail

Criaremos uma nova funcao `send-contact-email` que:
- Recebe os dados do formulario
- Salva no banco de dados
- Envia e-mail de notificacao via Resend
- Retorna confirmacao de sucesso

### Etapa 3: Atualizar o formulario de contato

Modificaremos o componente `Contact.tsx` para:
- Adicionar estado de carregamento durante o envio
- Chamar a funcao backend ao submeter
- Exibir mensagens de erro quando necessario
- Mostrar feedback visual de sucesso

---

## Fluxo do Sistema

```text
Usuario preenche formulario
         |
         v
Clica em "Enviar Mensagem"
         |
         v
Frontend chama funcao backend
         |
         v
+------------------------+
|   send-contact-email   |
+------------------------+
         |
    +----+----+
    |         |
    v         v
 Salva no    Envia e-mail
 banco de    via Resend
 dados       para voce
    |         |
    +----+----+
         |
         v
Retorna sucesso ao usuario
         |
         v
Exibe mensagem de confirmacao
```

---

## Arquivos que serao criados/modificados

| Arquivo | Acao |
|---------|------|
| `supabase/functions/send-contact-email/index.ts` | Criar |
| `supabase/config.toml` | Adicionar configuracao da funcao |
| `src/components/Contact.tsx` | Modificar para usar a nova funcao |

---

## Secao Tecnica

### Estrutura da tabela SQL

```sql
CREATE TABLE public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON public.contacts
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);
```

### Edge Function (send-contact-email)

A funcao ira:
- Validar os dados recebidos
- Inserir registro na tabela `contacts`
- Enviar e-mail via Resend para `marciosregueira@gmail.com`
- Usar CORS headers para permitir chamadas do frontend

### Modificacoes no Contact.tsx

- Adicionar estado `isSubmitting` para feedback visual
- Integrar com `supabase.functions.invoke()`
- Tratar erros e exibir mensagens apropriadas

---

## Proximo Passo

Apos aprovar este plano, irei solicitar a **RESEND_API_KEY** para configurar o envio de e-mails.

