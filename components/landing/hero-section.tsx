import { Icon } from "@/components/ui/icon";

function ReceptionistPreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
      <div className="absolute -right-5 top-8 size-48 rounded-full bg-fuchsia-200/50 blur-3xl sm:-right-10" />
      <div className="absolute -bottom-4 -left-5 size-48 rounded-full bg-violet-200/60 blur-3xl" />
      <div className="relative rounded-[2rem] border border-white/80 bg-gradient-to-br from-violet-100 via-white to-fuchsia-100 p-3 shadow-[0_30px_90px_-35px_rgba(91,74,172,0.4)] sm:p-5">
        <div className="rounded-[1.5rem] border border-slate-100 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">Today&apos;s activity</p>
              <p className="mt-1 text-xs text-slate-500">Your business, taking care of business</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">Live</span>
          </div>
          <div className="mt-4 rounded-2xl bg-slate-50 p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-full bg-violet-100 text-violet-700">
                <Icon name="message" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-800">Incoming call · 10:42 AM</p>
                <p className="mt-0.5 text-[11px] text-slate-500">New customer · Appointment request</p>
              </div>
              <span className="ml-auto size-2 shrink-0 rounded-full bg-emerald-500" />
            </div>
            <div className="ml-5 mt-4 border-l-2 border-violet-200 pl-4">
              <p className="text-xs leading-5 text-slate-600">
                “I can help with that! I have an opening tomorrow at 2:30. Shall I book it for you?”
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-2">
            <p className="text-xs font-semibold text-slate-800 sm:text-sm">Appointments booked</p>
            <span className="text-[11px] font-medium text-emerald-700">Today</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
            {[
              ["09", "Calls answered"],
              ["04", "Bookings made"],
              ["24/7", "Always available"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-slate-100 bg-white p-3 sm:p-4">
                <p className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">{value}</p>
                <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3 rounded-xl border border-violet-100 bg-violet-50/70 p-3.5">
            <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-white text-violet-700 shadow-sm">
              <Icon name="calendar" className="size-[18px]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-slate-800">Appointment confirmed</p>
              <p className="mt-0.5 text-[11px] text-slate-500">Tomorrow at 2:30 PM · Confirmation sent</p>
            </div>
            <Icon name="check" className="size-4 shrink-0 text-emerald-600" />
          </div>
        </div>
      </div>
      <div className="absolute -left-3 top-1/2 hidden -translate-x-1/2 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl shadow-slate-200/70 sm:block lg:-left-6">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-full bg-emerald-100 text-emerald-700">
            <Icon name="check" className="size-4" />
          </span>
          <div>
            <p className="text-xs font-semibold text-slate-800">Booking complete</p>
            <p className="mt-0.5 text-[10px] text-slate-500">Calendar updated automatically</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#6558ff] via-[#8b2cf5] to-[#d329ed] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute -left-28 -top-36 size-96 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-48 right-0 size-[32rem] rounded-full border border-white/10" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white shadow-sm sm:text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
            </span>
            Your always-on AI receptionist
          </div>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Every call answered. Every appointment booked.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Meet the AI receptionist that answers customer questions, books your
            calendar, and follows up automatically—so you can focus on the work
            in front of you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-700 shadow-lg shadow-violet-950/15 transition hover:-translate-y-0.5 hover:bg-violet-50"
              href="#get-started"
            >
              Start your free 7-day trial <Icon name="arrow" className="size-4" />
            </a>
            <a
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              href="#how-it-works"
            >
              See how it works
            </a>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-white/85 sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="check" className="size-4 text-white" /> No credit card required
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="check" className="size-4 text-white" /> Set up in minutes
            </span>
          </div>
        </div>
        <ReceptionistPreview />
      </div>
    </section>
  );
}
