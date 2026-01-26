
# Transformar a Imagem do Fundador em Formato Circular

## Objetivo
Modificar a seção "Sobre Nós" na página de Portfolio para exibir a imagem do fundador dentro de um formato circular, substituindo o formato retangular atual.

---

## Mudanças Propostas

### Estrutura Visual
- Alterar o container da imagem de retangular (`rounded-2xl`) para circular (`rounded-full`)
- Configurar a imagem com `aspect-square` para garantir proporções 1:1
- Usar `object-cover` e `object-top` para focar no rosto/parte superior da foto
- Ajustar o tamanho máximo do círculo para manter boa proporção visual

### Implementação Técnica

**Arquivo:** `src/pages/PortfolioPage.tsx`

**Alterações na linha 170-172:**

```text
Antes (retangular):
- Container com rounded-2xl
- Imagem com max-w-md

Depois (circular):
- Container com rounded-full e aspect-square
- Imagem com rounded-full
- object-cover object-top para enquadrar o rosto
- Tamanho ajustado (w-80 h-80 ou similar)
```

### Resultado Esperado
- A imagem do fundador será exibida em um círculo perfeito
- O foco estará na parte superior da foto (rosto)
- O layout geral da seção será mantido (grid de 2 colunas)
- Elementos decorativos de blur existentes continuarão funcionando
