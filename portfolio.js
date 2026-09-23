const translations = {
  pt: {
    skip: "Saltar para o conteúdo", navAbout: "Sobre", navSkills: "Competências", navProjects: "Projectos", navExperience: "Experiência", navContact: "Contacto",
    availability: "Disponível para oportunidades remotas", role: "Desenvolvedor Android & Web Júnior", heroLine1: "Crio produtos digitais úteis", heroAccent: "para pessoas reais.",
    heroLead: "Desenvolvedor baseado em Maputo, criando aplicações Android e experiências web responsivas com Kotlin, Firebase, JavaScript e Python.", viewWork: "Ver projectos", downloadCv: "Baixar CV",
    factApps: "apps publicados", factYears: "anos em operações", factLanguages: "idiomas falados", portraitLabel: "Disponível mundialmente",
    aboutTitle: "Tecnologia sustentada por experiência no mundo real.",
    aboutP1: "Sou um desenvolvedor júnior com experiência prática na criação de aplicações Android em Kotlin e integração de serviços Firebase e Google Cloud. Os meus projectos transformam necessidades do dia-a-dia em produtos digitais simples e acessíveis.",
    aboutP2: "O meu percurso é incomum — e útil. Desde 2019, trabalho em operações farmacêuticas e actualmente colaboro em pesquisa de medicamentos com o Instituto Nacional de Saúde. Também estou a concluir a Licenciatura em Contabilidade e Auditoria. Estas experiências reforçam a minha atenção ao detalhe, disciplina com dados, confidencialidade e compreensão dos utilizadores.",
    whatIBring: "O que ofereço", bring1: "Visão de produto moldada pelo atendimento directo ao cliente", bring2: "Execução responsável e tratamento cuidadoso de dados", bring3: "Conhecimento multidisciplinar em saúde, finanças e tecnologia",
    skillsTitle: "Ferramentas que uso para transformar ideias em produtos funcionais.", mobileTitle: "Desenvolvimento mobile", mobileCopy: "Aplicações Android criadas com Kotlin e Android Studio, do desenho da interface à integração cloud e publicação no Google Play.",
    cloudTitle: "Cloud e dados", cloudCopy: "Autenticação, armazenamento e experiências conectadas com Firebase e serviços do ecossistema Google Cloud.", webTitle: "Web e automação", webCopy: "Interfaces responsivas e automações práticas construídas com tecnologias web e Python.", businessTitle: "Negócio e operações", businessCopy: "Atendimento, documentação, controlo de stock, pesquisa, fundamentos de contabilidade e rotinas administrativas estruturadas.",
    projectsTitle: "Produtos e experiências seleccionados.", projectsIntro: "Uma selecção de soluções mobile focadas em criação assistida por IA, produtividade documental e saúde quotidiana.", published: "Aplicação Android publicada", prototype: "Protótipo de produto",
    roastCopy: "Aplicação Android que transforma uma fotografia em trocadilhos, elogios e legendas prontas para redes sociais usando IA. Criada como produto mobile completo com serviços cloud.", scannerCopy: "Fluxo mobile para digitalizar documentos, traduzir o conteúdo e exportar o resultado final em PDF ou Word.", nutritionName: "Aplicação de Calorias e Nutrição", nutritionCopy: "Conceito de produto criado para tornar simples e claro o cálculo de calorias e acompanhamento diário da nutrição.",
    experienceTitle: "Um percurso multidisciplinar construído com serviço e precisão.", present: "Actual", researchRole: "Colaborador em Pesquisa de Medicamentos", ins: "Instituto Nacional de Saúde", researchCopy: "Apoio em actividades de pesquisa de medicamentos e organização de informação usada no trabalho de investigação.", pharmacyRole: "Técnico de Farmácia", pharmacyCopy: "Orientação a utentes, organização de medicamentos, controlo de stock, verificação de prazos e manutenção confidencial de registos num ambiente que exige atenção ao detalhe.",
    degreeDate: "Em curso", degreeTitle: "Licenciatura em Contabilidade e Auditoria — Finalista", education: "Ensino Superior", degreeCopy: "Desenvolvimento de competências analíticas, financeiras e organizacionais em paralelo com a minha prática tecnológica.", pharmacyDegree: "Técnico Médio de Farmácia", ics: "Instituto de Ciências de Saúde de Chimoio", awardCopy: "Melhor estudante do curso de Farmácia VII, após estágios em centros de saúde, hospitais e depósitos provinciais de medicamentos.",
    languages: "Idiomas", communicationTitle: "Preparado para comunicar entre equipas e culturas.", portuguese: "Português", english: "Inglês", excellent: "Excelente", conversational: "Razoável",
    contactTitle: "Tem uma vaga ou uma ideia? Vamos criar algo útil.", contactCopy: "Estou disponível para vagas remotas de desenvolvimento júnior, projectos freelance e colaboração com equipas internacionais.", emailMe: "Enviar email", footerNote: "Desenhado e criado em Maputo, Moçambique."
  }
};

Object.assign(translations.pt, {
  webProject: "Projecto web bilingue",
  liveDemo: "Ver site",
  medibookCopy: "Experiência responsiva para marcação de consultas, descoberta de médicos e um fluxo de reserva claro.",
  novaCopy: "Loja online moderna com descoberta de produtos, categorias e uma experiência de compra bilingue.",
  clientflowCopy: "Landing page de CRM focada em leads, relações com clientes e produtividade da equipa.",
  finoraCopy: "Conceito de dashboard fintech para acompanhar saldos, despesas e objectivos financeiros."
});

const english = {};
document.querySelectorAll("[data-i18n]").forEach((element) => { english[element.dataset.i18n] ??= element.textContent; });

const languageButtons = document.querySelectorAll(".language-button");
function setLanguage(language) {
  const dictionary = language === "pt" ? translations.pt : english;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  localStorage.setItem("portfolio-language", language);
}
languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("portfolio-language") === "pt" ? "pt" : "en");
