import { cn } from "@/utils/cn";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <span
        className={cn(
          "font-mono text-xs uppercase tracking-[0.25em]",
          light ? "text-rose-light" : "text-rose"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-3 font-display text-3xl leading-tight sm:text-4xl md:text-[2.75rem]",
          light ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            light ? "text-paper/75" : "text-mist"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}