import { features } from "@/data/landing-page";
import { Icon } from "@/components/ui/icon";

export function FeaturesSection() {
  return (
    <>
      <section className="border-y border-violet-100 bg-gradient-to-r from-violet-50 via-white to-fuchsia-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-7 sm:px-8 md:flex-row lg:px-10">
          <p className="text-center text-sm font-medium text-slate-500 md:text-left">
            One friendly assistant. Every customer touchpoint.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-semibold text-slate-700 sm:gap-x-10">
            <span className="inline-flex items-center gap-2"><Icon name="message" className="size-4 text-emerald-600" /> Calls</span>
            <span className="inline-flex items-center gap-2"><Icon name="calendar" className="size-4 text-violet-600" /> Calendar</span>
            <span className="inline-flex items-center gap-2"><Icon name="message" className="size-4 text-sky-600" /> WhatsApp</span>
            <span className="inline-flex items-center gap-2"><Icon name="sparkle" className="size-4 text-fuchsia-600" /> Website chat</span>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl scroll-mt-8 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">More time for what matters</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
            A great first impression, every time.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            From the first hello to the follow-up, let one helpful assistant keep your customer experience moving.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.number} className="group rounded-2xl border border-slate-200/80 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/60 sm:p-6">
              <div className="flex items-center justify-between">
                <span className={`grid size-11 place-items-center rounded-xl ${feature.tone}`}>
                  <Icon name={feature.icon} />
                </span>
                <span className="text-xs font-semibold text-slate-300">{feature.number}</span>
              </div>
              <h3 className="mt-6 text-base font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
