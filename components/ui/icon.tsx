import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "bell"
  | "calendar"
  | "check"
  | "message"
  | "sparkle"
  | "sync";

const paths: Record<IconName, ReactNode> = {
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M7.5 3v4M16.5 3v4M3.5 10h17m-12 4h3m-3 3h7" />
    </>
  ),
  message: (
    <>
      <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5 8 8 0 0 1-3.5-.8L4 20l1.8-4.3A7.5 7.5 0 1 1 20 11.5Z" />
      <path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01" />
    </>
  ),
  bell: (
    <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12h4" />
  ),
  sync: (
    <>
      <path d="M20 7v5h-5M4 17v-5h5" />
      <path d="M5.6 9A7 7 0 0 1 17 6l3 6M4 12l3 6a7 7 0 0 0 11.4-3" />
    </>
  ),
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  sparkle: (
    <>
      <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
      <path d="m19 14 1.1 2.4L22.5 17.5 20.1 18.6 19 21l-1.1-2.4-2.4-1.1 2.4-1.1L19 14Z" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
};

export function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
