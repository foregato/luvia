import Container from "@/components/Container";
import Icon from "@/components/Icon";
import { DEVELOPER_NAME, DEVELOPER_URL, INSTAGRAM_URL, NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <span className="font-display text-2xl">{SITE_NAME}</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/60">
              Social media, marketing digital e criação de conteúdo para marcas
              que querem ser lembradas.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-colors hover:border-rose hover:text-rose"
              aria-label="Instagram da Luvia"
            >
              <Icon name="instagram" className="h-4 w-4" />
            </a>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/40">
              Links rápidos
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/70 transition-colors hover:text-rose"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/40">
              {SITE_NAME}
            </p>
            <p className="mt-4 text-sm text-paper/70">
              Feito com carinho para marcas que querem crescer nas redes.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-paper/50">
            © {new Date().getFullYear()} {SITE_NAME}. Todos os direitos reservados.
          </p>

          {/* Crédito do desenvolvedor — discreto, deve permanecer em todas as páginas */}
          <a
            href={DEVELOPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-paper/30 opacity-60 transition-opacity duration-300 hover:text-rose hover:opacity-100"
          >
            Desenvolvido por {DEVELOPER_NAME}
          </a>
        </div>
      </Container>
    </footer>
  );
}
