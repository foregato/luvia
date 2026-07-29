/**
 * Combina classes condicionalmente, ignorando valores falsy.
 * Utilitário leve — evita depender de uma lib externa apenas para isso.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
