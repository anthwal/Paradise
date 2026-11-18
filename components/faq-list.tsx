// Native <details>, accessible without JavaScript (docs/07-ui-ux-design-system.md)
import { Faqs } from "@/lib/faqs/faqs";
import { Plus } from "lucide-react";
import ToConfirm from "@/components/to-confirm";

export default function FaqList({ items }: { items: Faqs }) {
  return (
    <div className="border-t border-alloy">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-alloy">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium [&::-webkit-details-marker]:hidden">
            {item.question}
            <Plus
              aria-hidden="true"
              className="size-5 shrink-0 text-steel transition-transform group-open:rotate-45 motion-reduce:transition-none"
            />
          </summary>
          <div className="grid justify-items-start gap-3 pb-6 text-steel">
            {item.answer && <p>{item.answer}</p>}
            {item.toConfirm && <ToConfirm />}
          </div>
        </details>
      ))}
    </div>
  );
}
