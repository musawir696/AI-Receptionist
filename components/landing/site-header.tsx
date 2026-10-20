import { BrandMark } from "@/components/ui/brand-mark";
import { Icon } from "@/components/ui/icon";

export function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
      <a href="#" className="flex items-center gap-2.5" aria-label="Reception home">
        <BrandMark />
        <span className="text-base font-bold tracking-tight text-slate-900">
          reception<span className="text-fuchsia-600">.</span>
        </span>
      </a>

      <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
        <a className="text-sm font-medium text-slate-600 transition hover:text-fuchsia-600" href="#features">Features</a>
        <a className="text-sm font-medium text-slate-600 transition hover:text-fuchsia-600" href="#how-it-works">How it works</a>
        <a className="text-sm font-medium text-slate-600 transition hover:text-fuchsia-600" href="#integrations">Integrations</a>
      </nav>

      <a
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-600 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:-translate-y-0.5 hover:shadow-lg sm:px-5"
        href="#get-started"
      >
        Get started <Icon name="arrow" className="size-4" />
      </a>
    </header>
  );
}
