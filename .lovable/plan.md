
# Plano: Efeito de Gradiente e Círculos Concêntricos na Hero do Portfolio

## Objetivo
Aplicar um efeito visual similar à imagem de referência na hero do Portfolio, utilizando as cores padrão do site (vermelho primário) com tons mais escuros, e adicionar círculos concêntricos decorativos por trás da imagem dos dispositivos.

---

## Elementos Visuais a Implementar

### 1. Gradiente de Fundo
Criar um gradiente diagonal/radial que use as cores do site:
- **Lado esquerdo**: Tons mais escuros (preto/cinza escuro com leve toque de vermelho)
- **Centro para direita**: Transição suave para vermelho primário escurecido
- Manter o fundo predominantemente escuro conforme solicitado

### 2. Círculos Concêntricos (Atrás da Imagem)
Adicionar um conjunto de círculos concêntricos posicionados por trás da imagem dos dispositivos:
- 4-5 círculos com tamanhos crescentes
- Bordas sutis com gradiente ou opacidade variada
- Cores baseadas na cor primária (vermelho) com baixa opacidade
- Efeito de "aura" ou "ondas" emanando do centro

### 3. Pontos Decorativos
Manter/adicionar pequenos pontos luminosos espalhados pelo fundo para dar profundidade

---

## Mudanças Técnicas

### Arquivo: `src/pages/PortfolioPage.tsx`

**Alterações no Background da Hero (linhas 120-127):**
- Substituir o fundo sólido por um gradiente multi-direcional
- Usar combinação de `bg-gradient-to-r` ou gradiente radial via CSS inline
- Cores: do preto/cinza escuro para tons de vermelho escurecido

**Alterações nos Círculos Concêntricos (linhas 191-194):**
- Remover os círculos atuais com bordas finas
- Adicionar novos círculos concêntricos mais pronunciados:
  - Círculo externo: ~600px de diâmetro
  - Círculos intermediários: ~500px, ~400px, ~300px
  - Bordas mais grossas (2-4px) com cor primária em opacidades variadas (10%-25%)
- Posicionar centralizados atrás da imagem dos dispositivos

**Remoção de Elementos Desnecessários:**
- Remover o grid SVG de linhas diagonais (Tech Grid Background)
- Remover os quadrados rotacionados (Corner accent squares)
- Manter apenas os círculos concêntricos e pontos decorativos

---

## Paleta de Cores Utilizada

```text
Cores base do site:
- Background: HSL(0, 0%, 4%) - Preto profundo
- Primary: HSL(0, 72%, 56%) - Vermelho #E03F3F
- Accent: HSL(19, 92%, 58%) - Laranja/coral

Para o gradiente (tons escuros):
- Esquerda: HSL(0, 0%, 4%) - Preto base
- Centro: HSL(0, 30%, 12%) - Preto com leve toque avermelhado
- Direita: HSL(0, 50%, 20%) - Vermelho muito escuro

Círculos concêntricos:
- Bordas em vermelho primário com opacidades de 8% a 25%
- Preenchimento sutil em alguns círculos (5% opacidade)
```

---

## Estrutura dos Círculos

```text
+------------------------------------------+
|                                          |
|     [Texto Hero]          ○○○○○          |
|                         ○     ○          |
|                        ○  IMG  ○         |
|                         ○     ○          |
|                          ○○○○○           |
|                                          |
+------------------------------------------+

Legenda:
○ = Círculos concêntricos (4-5 camadas)
IMG = Imagem dos dispositivos
```

---

## Resultado Esperado
- Hero com visual mais dinâmico e moderno
- Gradiente sutil que mantém o tema escuro mas adiciona vida
- Círculos concêntricos que destacam a imagem dos dispositivos, criando um efeito de "portal" ou "ondas de energia"
- Mantém o efeito de glow pulsante vermelho que já existe
