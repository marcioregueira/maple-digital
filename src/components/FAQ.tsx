import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Qual é o prazo médio para desenvolvimento de um site?",
    answer: "O prazo varia conforme a complexidade do projeto. Sites institucionais levam de 2 a 4 semanas, landing pages de 1 a 2 semanas, e-commerces de 4 a 8 semanas, e aplicativos mobile de 8 a 16 semanas. Sempre definimos prazos realistas no início do projeto."
  },
  {
    question: "O site será responsivo e adaptado para celular?",
    answer: "Sim! Todos os nossos projetos são desenvolvidos com design responsivo, garantindo uma experiência perfeita em desktops, tablets e smartphones. Utilizamos as melhores práticas de desenvolvimento mobile-first."
  },
  {
    question: "Quais otimizações de SEO estão inclusas?",
    answer: "Incluímos otimização de títulos e meta descriptions, estrutura semântica HTML, velocidade de carregamento otimizada, imagens comprimidas com alt text, URLs amigáveis e configuração do Google Analytics e Search Console."
  },
  {
    question: "Como solicitar um orçamento para criar um site?",
    answer: "Você pode solicitar um orçamento através do formulário de contato em nosso site, pelo WhatsApp ou por e-mail. Após entender suas necessidades, enviamos uma proposta detalhada em até 24 horas."
  },
  {
    question: "Quais são os requisitos iniciais para começar o projeto?",
    answer: "Precisamos de: definição do objetivo do site, textos e conteúdos (podemos ajudar), logotipo em alta resolução, referências visuais de sites que você gosta, e informações sobre seu público-alvo."
  },
  {
    question: "Quais opções de pagamento estão disponíveis?",
    answer: "Oferecemos pagamento via PIX, transferência bancária ou cartão de crédito. Para projetos maiores, parcelamos em até 3x sem juros. O pagamento geralmente é dividido em 50% no início e 50% na entrega."
  },
  {
    question: "É possível hospedar o site em outro servidor?",
    answer: "Sim! Você pode escolher onde hospedar seu site. Oferecemos recomendações de hospedagem confiáveis e também podemos configurar tudo para você em servidores de sua preferência."
  },
  {
    question: "Existem custos mensais após a conclusão do site?",
    answer: "Os únicos custos recorrentes são hospedagem (a partir de R$ 30/mês) e domínio (R$ 40/ano). Oferecemos planos de manutenção opcionais para atualizações e suporte contínuo."
  },
  {
    question: "Quais são as etapas do processo de criação?",
    answer: "1) Briefing e planejamento, 2) Criação do layout/protótipo, 3) Aprovação do design, 4) Desenvolvimento e programação, 5) Testes e ajustes, 6) Publicação e entrega. Você acompanha cada etapa."
  },
  {
    question: "Meu site será encontrado no Google?",
    answer: "Sim! Desenvolvemos com as melhores práticas de SEO para que seu site seja indexado pelo Google. Após o lançamento, orientamos sobre estratégias de conteúdo para melhorar o posicionamento orgânico."
  },
  {
    question: "Posso fazer alterações no site depois de pronto?",
    answer: "Sim! Entregamos o site com acesso administrativo para que você possa fazer alterações básicas de textos e imagens. Para mudanças estruturais, oferecemos suporte técnico com valores acessíveis."
  },
  {
    question: "Quais tipos de sites a Maple Digital desenvolve?",
    answer: "Desenvolvemos sites institucionais, landing pages, e-commerces, aplicativos mobile, sistemas web personalizados, blogs e portfólios. Cada projeto é único e adaptado às necessidades do cliente."
  },
];

const FAQ = () => {
  const leftColumn = faqData.filter((_, index) => index % 2 === 0);
  const rightColumn = faqData.filter((_, index) => index % 2 === 1);

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {leftColumn.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`left-${index}`}
                  className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {rightColumn.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`right-${index}`}
                  className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
