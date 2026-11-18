// Content blocks written directly in pages and components

import type { LucideIcon } from "lucide-react";

// Home page highlight strip
export type Highlight = { label: string; Icon: LucideIcon };

export type Highlights = Highlight[];

// Home page "Why Paradise" reasons
export type Reason = { title: string; text: string };

export type Reasons = Reason[];

// Process steps (components/process-steps.tsx)
export type Step = { title: string; text: string };

export type Steps = Step[];

// Service page "On this page" links
export type PageSection = { id: string; label: string };

export type PageSections = PageSection[];

// Builders & Commercial page
export type Audience = { title: string; text: string };

export type Audiences = Audience[];

export type QuoteNeed = { title: string; text: string };

export type QuoteNeeds = QuoteNeed[];

// About page
export type BackgroundPrompts = string[];

export type Principle = { title: string; text: string };

export type Principles = Principle[];
