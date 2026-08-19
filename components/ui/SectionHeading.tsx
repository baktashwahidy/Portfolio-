import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  label: string;
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({ index, label, children, className = "" }: SectionHeadingProps) {
  return (
    <div className={`grid grid-cols-1 gap-5 border-t border-[#d5d2c9] pt-4 sm:grid-cols-[minmax(8rem,1fr)_minmax(0,3fr)] sm:gap-8 ${className}`}>
      <p className="eyebrow">
        {index} / {label}
      </p>
      {children}
    </div>
  );
}
