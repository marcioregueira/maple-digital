import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Política de <span className="text-primary">Privacidade</span>
            </h1>
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-muted-foreground">
            {/* Introdução */}
            <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
              <p className="leading-relaxed">
                A <span className="text-primary font-semibold">Maple Digital</span> está comprometida em proteger a 
                privacidade e os dados pessoais de nossos clientes e visitantes. Esta Política de Privacidade descreve 
                como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza nosso site e serviços.
              </p>
            </section>

            {/* Informações Coletadas */}
            <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Informações que Coletamos</h2>
              <p className="leading-relaxed mb-4">
                Coletamos as seguintes informações quando você interage conosco:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Dados de contato:</strong> nome, e-mail e telefone (fornecidos via formulário de contato)</li>
                <li><strong>Informações do projeto:</strong> descrição do projeto ou serviço solicitado</li>
                <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas e tempo de permanência</li>
                <li><strong>Cookies:</strong> informações de cookies para melhorar sua experiência de navegação</li>
              </ul>
            </section>

            {/* Como Usamos */}
            <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Como Usamos Suas Informações</h2>
              <p className="leading-relaxed mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responder às suas solicitações de contato e orçamentos</li>
                <li>Fornecer informações sobre nossos serviços de desenvolvimento web</li>
                <li>Melhorar nosso site e experiência do usuário</li>
                <li>Enviar comunicações relevantes sobre nossos serviços (com seu consentimento)</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies e Tecnologias Similares</h2>
              <p className="leading-relaxed mb-4">
                Utilizamos cookies para melhorar sua experiência em nosso site. Os cookies são pequenos arquivos 
                de texto armazenados em seu dispositivo que nos ajudam a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Lembrar suas preferências de navegação</li>
                <li>Analisar o tráfego e uso do site</li>
                <li>Personalizar conteúdo e melhorar a experiência</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas 
                funcionalidades do site.
              </p>
            </section>

            {/* Compartilhamento */}
            <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Compartilhamento de Dados</h2>
              <p className="leading-relaxed">
                <strong>Não vendemos, alugamos ou compartilhamos</strong> suas informações pessoais com terceiros 
                para fins de marketing. Podemos compartilhar dados apenas nas seguintes situações:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Com prestadores de serviços essenciais para nossa operação (hospedagem, análise)</li>
                <li>Quando exigido por lei ou ordem judicial</li>
                <li>Para proteger nossos direitos legais</li>
              </ul>
            </section>

            {/* Segurança */}
            <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Segurança dos Dados</h2>
              <p className="leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações 
                contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia SSL, 
                firewalls e práticas seguras de desenvolvimento.
              </p>
            </section>

            {/* LGPD */}
            <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Seus Direitos (LGPD)</h2>
              <p className="leading-relaxed mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Acesso:</strong> solicitar informações sobre os dados que temos sobre você</li>
                <li><strong>Correção:</strong> solicitar a correção de dados incompletos ou incorretos</li>
                <li><strong>Eliminação:</strong> solicitar a exclusão de seus dados pessoais</li>
                <li><strong>Portabilidade:</strong> receber seus dados em formato estruturado</li>
                <li><strong>Revogação:</strong> revogar o consentimento a qualquer momento</li>
                <li><strong>Oposição:</strong> opor-se ao tratamento de dados em determinadas situações</li>
              </ul>
            </section>

            {/* Retenção */}
            <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Retenção de Dados</h2>
              <p className="leading-relaxed">
                Mantemos suas informações pelo tempo necessário para cumprir as finalidades descritas nesta 
                política, a menos que um período de retenção maior seja exigido por lei. Dados de contato são 
                mantidos enquanto houver relacionamento comercial ativo ou potencial.
              </p>
            </section>

            {/* Alterações */}
            <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Alterações na Política</h2>
              <p className="leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão 
                publicadas nesta página com a data de atualização revisada. Recomendamos que você revise 
                esta política regularmente.
              </p>
            </section>

            {/* Contato */}
            <section className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contato</h2>
              <p className="leading-relaxed mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, 
                entre em contato conosco:
              </p>
              <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                <p className="text-foreground font-semibold">Maple Digital – Soluções Digitais</p>
                <p>E-mail: <a href="mailto:contato@mapledigital.com" className="text-primary hover:underline">contato@mapledigital.com</a></p>
                <p>Localização: Recife, PE - Brasil</p>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <a 
              href="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              ← Voltar para a página inicial
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
