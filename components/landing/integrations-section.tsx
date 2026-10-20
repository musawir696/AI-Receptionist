import { integrations } from "@/data/landing-page";

export function IntegrationsSection() {
  return (
    <section id="integrations" className="mx-auto max-w-7xl scroll-mt-8 px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="grid items-center gap-10 rounded-3xl border border-violet-100 bg-gradient-to-br from-white via-white to-violet-50 p-6 shadow-sm shadow-violet-100/60 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">Fits right in</span>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-3xl">
            All your conversations, working together.
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Meet customers where they already are, and keep appointments connected to your calendar.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 lg:max-w-md lg:justify-end">
          {integrations.map((integration) => (
            <span key={integration} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700">
              <span className="size-2 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500" />
              {integration}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
