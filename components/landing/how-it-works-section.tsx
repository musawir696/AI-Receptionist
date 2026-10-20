import { steps } from "@/data/landing-page";
import { Icon } from "@/components/ui/icon";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-8 border-y border-violet-100 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10 lg:py-28">
        <div className="max-w-lg">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">Simple by design</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
            Up and running before your next busy day.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            No complicated setup. Teach your receptionist the essentials, connect your calendar, and you’re ready to go.
          </p>
          <a className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition hover:text-fuchsia-600" href="#get-started">
            Start your free trial <Icon name="arrow" className="size-4" />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="rounded-2xl border border-violet-100 bg-white/90 p-5 shadow-sm shadow-violet-100/60 sm:p-6">
              <span className="grid size-10 place-items-center rounded-full border border-violet-200 bg-gradient-to-br from-violet-100 to-fuchsia-100 text-sm font-semibold text-violet-700">{step.number}</span>
              <h3 className="mt-6 text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
