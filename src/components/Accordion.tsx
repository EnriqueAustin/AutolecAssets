import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

type AccordionItem = { question: string; answer: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="rounded-md border border-ink/10 bg-white shadow-sm shadow-ink/5">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-ink transition hover:text-autolec-green"
            >
              {item.question}
              <ChevronDown
                size={20}
                className={cn("shrink-0 text-soil/40 transition-transform duration-200", isOpen && "rotate-180 text-autolec-green")}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-200",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-7 text-soil/70">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
