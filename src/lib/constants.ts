// Informações de contato da Luvia — centralizadas para fácil manutenção.
export const SITE_NAME = "Luvia";

export const WHATSAPP_NUMBER = "5511999999999"; // apenas dígitos, com DDI e DDD
export const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de um orçamento.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const INSTAGRAM_URL = "https://instagram.com/luvia";
export const EMAIL = "contato@luvia.com.br";
export const ADDRESS = "São Paulo, SP";

export const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

// Crédito do desenvolvedor — deve permanecer em todas as páginas.
// Alterar a URL abaixo é suficiente para atualizar o link em todo o site.
export const DEVELOPER_NAME = "Foregato";
export const DEVELOPER_URL = "https://foregato.com";
