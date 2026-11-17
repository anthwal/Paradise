import type { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-site px-4 md:px-8 xl:px-12">
      {children}
    </div>
  );
}
