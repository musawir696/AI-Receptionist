import { BrandMark } from "@/components/ui/brand-mark";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-violet-100 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left lg:px-10">
      <a href="#" className="flex items-center gap-2" aria-label="Reception home">
        <BrandMark />
        <span className="text-sm font-bold tracking-tight text-slate-900">
          reception<span className="text-violet-600">.</span>
        </span>
      </a>
      <p className="text-xs text-slate-500">
        More time for your business. A better hello for every customer.
      </p>
      <a className="text-xs font-medium text-slate-500 transition hover:text-violet-700" href="mailto:hello@reception.ai">
        Get in touch
      </a>
    </footer>
  );
}
