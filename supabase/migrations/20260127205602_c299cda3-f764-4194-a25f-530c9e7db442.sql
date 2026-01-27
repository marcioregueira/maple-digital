-- Tabela para armazenar contatos do formulário
CREATE TABLE public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Habilitar Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Política: qualquer pessoa pode inserir (para enviar mensagens)
CREATE POLICY "Allow public insert" ON public.contacts
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Nenhuma política de SELECT = ninguém pode ler diretamente (protege os dados)