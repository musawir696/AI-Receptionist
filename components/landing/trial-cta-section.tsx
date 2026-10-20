import { Icon } from "@/components/ui/icon";

export function TrialCtaSection() {
  return (
    <section id="get-started" className="px-5 pb-12 sm:px-8 sm:pb-16 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#6558ff] via-[#8b2cf5] to-[#d329ed] px-6 py-16 text-center shadow-xl shadow-violet-300/50 sm:px-12 sm:py-20">
        <div className="absolute -left-20 -top-28 size-72 rounded-full border border-white/10" />
        <div className="absolute -bottom-48 -right-12 size-96 rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90">
            <Icon name="sparkle" className="size-4" /> Make room for more
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white drop-shadow-sm sm:text-4xl lg:text-5xl">
            Ready to never miss another appointment?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:text-lg sm:leading-8">
            Try it free for 7 days, no credit card required. Get professional, always-on customer support without adding more to your plate.
          </p>
          <a className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-violet-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-violet-50 sm:px-9 sm:text-base" href="mailto:hello@reception.ai?subject=Start%20my%20free%20trial">
            Start free trial <Icon name="arrow" className="size-5" />
          </a>
          <p className="mt-4 text-xs font-medium text-white/75 sm:text-sm">
            Cancel anytime <span className="mx-1.5">·</span> No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
