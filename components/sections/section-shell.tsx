import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionShell({ children, className = "", id }: SectionShellProps) {
  return (
    <section className={`scroll-mt-20 px-5 py-14 sm:py-16 lg:px-8 ${className}`} id={id}>
      <div className="mx-auto w-full max-w-[1180px]">{children}</div>
    </section>
  );
}
