import { cn } from "../lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, copy, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-extrabold uppercase tracking-normal text-autolec-green">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-ink text-balance md:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-8 text-soil/75 md:text-lg">{copy}</p>}
    </div>
  );
}
