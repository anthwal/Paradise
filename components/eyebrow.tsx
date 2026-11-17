import {ReactNode} from "react";

export default function Eyebrow({ children }: { children: ReactNode }) {
    return (
        <p className="flex items-center gap-3 font-display text-eyebrow uppercase">
            <svg aria-hidden="true" width="24" height="9" viewBox="0 0 24 9" className="shrink-0">
                <path d="M0 0.5h24M0 4.5h24M0 8.5h24" stroke="currentColor" />
            </svg>
            {children}
        </p>
    );
}