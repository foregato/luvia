export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10">
      <div className="container-luvia flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-display text-lg text-paper">
          Luvia<span className="text-violet-soft">.</span>
        </p>
        <p className="text-xs text-paper/40">
          © {new Date().getFullYear()} Luvia Marketing Digital. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
