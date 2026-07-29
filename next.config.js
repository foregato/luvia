/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // As imagens de placeholder (hero e portfólio) são SVGs locais.
    // Ao substituir por fotos reais (jpg/png), esta configuração pode ser removida.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
