"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionContextValue = {
  value: string[];
  onValueChange: (value: string[]) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

function useAccordion(): AccordionContextValue {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within Accordion");
  }
  return context;
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string[];
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, children, type = "single", defaultValue = [], ...props }, ref) => {
    const [value, setValue] = React.useState<string[]>(defaultValue);

    function onValueChange(newValue: string[]): void {
      setValue(newValue);
    }

    return (
      <AccordionContext.Provider value={{ value, onValueChange }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("border-b border-[var(--border-subtle)]", className)}
        data-value={value}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, children, value, ...props }, ref) => {
  const { value: openValues, onValueChange } = useAccordion();
  const isOpen = openValues.includes(value);

  function handleClick(): void {
    if (isOpen) {
      onValueChange(openValues.filter((v) => v !== value));
    } else {
      onValueChange([...openValues, value]);
    }
  }

  return (
    <button
      ref={ref}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium text-white transition-colors hover:text-white/80",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-300",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, value, ...props }, ref) => {
  const { value: openValues } = useAccordion();
  const isOpen = openValues.includes(value);

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96" : "max-h-0"
      )}
      {...props}
    >
      <div className={cn("pb-4 pt-0 text-[var(--foreground-secondary)]", className)}>
        {children}
      </div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
