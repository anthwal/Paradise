import {ComponentProps} from "react";
import Link from "next/link";

const base = "inline-flex min-h-12 items-center justify-center gap-2 rounded-xs border px-6 font-medium transition-colors motion-reduce:transition-none";

const variants = {
    primary: "border-ember bg-ember text-white hover:border-ember-dark hover:bg-ember-dark",
    secondary: "border-ink text-ink hover:bg-ink hover:text-paper",
    "ghost-light": "border-paper text-paper hover:bg-paper hover:text-ink",
};

type Variant = keyof typeof variants;

type ButtonProps = Omit<ComponentProps<"button">, "className"> & {variant?: Variant;};

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {variant?: Variant;};

export function Button({variant = "primary", type = "button", ...props}: ButtonProps) {
    return <button type={type} className={`${base} ${variants[variant]}`} {...props} />;
}

export function ButtonLink({variant = "primary", ...props}: ButtonLinkProps) {
    return <Link className={`${base} ${variants[variant]}`} {...props} />;
}