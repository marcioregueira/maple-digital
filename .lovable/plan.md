

## Problema

O menu mobile está dentro do `<header>` que tem `bg-black/90 backdrop-blur-md` (90% de opacidade). Mesmo que o painel do menu tenha `bg-black`, ele herda o contexto visual do header semi-transparente, e o `backdrop-blur` do header interfere. Além disso, o overlay (linha 87) tem `z-40` mas o painel tem `z-50`, ambos dentro de um elemento `z-50`, o que pode causar conflitos de empilhamento.

## Plano de Correção

**Arquivo:** `src/components/Header.tsx`

1. **Mover o menu mobile para fora do `<header>`** — usar um Fragment (`<>`) para retornar tanto o header quanto o menu mobile separadamente, garantindo que o menu não herde a transparência do header.

2. **Melhorar o overlay e o painel do menu:**
   - Overlay: `fixed inset-0 bg-black/80 z-[60]` (escurece o fundo)
   - Painel do menu: `fixed top-[88px] left-0 right-0 bottom-0 bg-[#0A0A0A] z-[70]` — cor sólida do background do site, sem transparência
   - Adicionar uma borda superior sutil (`border-t border-primary/20`)

3. **Melhorar o visual do menu:** adicionar padding mais generoso e separadores visuais entre os itens para melhor legibilidade mobile.

Essas mudanças garantem que o menu mobile tenha fundo 100% opaco e não seja afetado pela transparência do header.

