import type { IconName } from "@/components/ui/icon";

export const features: {
  number: string;
  title: string;
  description: string;
  icon: IconName;
  tone: string;
}[] = [
  {
    number: "01",
    title: "Appointments, handled",
    description:
      "Book, move, and cancel appointments automatically, with your live availability always in sync.",
    icon: "calendar",
    tone: "bg-violet-100 text-violet-700",
  },
  {
    number: "02",
    title: "A reply in every channel",
    description:
      "Give every caller and website visitor a helpful, consistent answer, day or night.",
    icon: "message",
    tone: "bg-rose-100 text-rose-600",
  },
  {
    number: "03",
    title: "Reminders that show up",
    description:
      "Send timely confirmations and reminders so customers know exactly what comes next.",
    icon: "bell",
    tone: "bg-amber-100 text-amber-700",
  },
  {
    number: "04",
    title: "Always in the loop",
    description:
      "Keep your calendar and your team up to date when plans change or a new lead comes in.",
    icon: "sync",
    tone: "bg-emerald-100 text-emerald-700",
  },
];

export const steps = [
  {
    number: "1",
    title: "Connect your calendar",
    description: "Bring in your availability and appointment types in minutes.",
  },
  {
    number: "2",
    title: "Make it sound like you",
    description: "Set your greeting, business details, and the way you help customers.",
  },
  {
    number: "3",
    title: "Let it take the next call",
    description: "Your receptionist answers, books, and follows up while you work.",
  },
];

export const integrations = [
  "Google Calendar",
  "WhatsApp",
  "Your website",
  "And more",
];
