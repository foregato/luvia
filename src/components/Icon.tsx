import { cn } from "@/utils/cn";

export type IconName =
  | "instagram"
  | "whatsapp"
  | "camera"
  | "target"
  | "sparkles"
  | "chart"
  | "chat"
  | "mail"
  | "pin"
  | "menu"
  | "close"
  | "arrow";

type IconProps = {
  name: IconName;
  className?: string;
};

const paths: Record<IconName, JSX.Element> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
 whatsapp: (
  <path
    d="M20.5 11.9c0 4.6-3.8 8.4-8.4 8.4-1.5 0-2.9-.4-4.1-1.1L3 20.5l1.4-4.8a8.3 8.3 0 0 1-1.3-4.5C3.1 6.6 6.9 2.8 11.5 2.8s9 3.7 9 9.1zm-8.4-6.6a6.6 6.6 0 0 0-6.6 6.6c0 1.5.5 2.9 1.3 4l-.8 2.8 2.9-.8c1.1.7 2.4 1.1 3.7 1.1a6.6 6.6 0 0 0 6.6-6.6 6.6 6.6 0 0 0-6.6-6.6zm3.9 8.9c-.2.5-1 .9-1.4 1-.4.1-.8.1-1.3-.1-.3-.1-.7-.2-1.2-.5-2.1-1-3.5-3-3.6-3.2-.1-.2-.9-1.1-.9-2.1s.5-1.5.7-1.7c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .5.4l.7 1.6c.1.1.1.3 0 .4l-.3.5c-.1.1-.2.3-.1.5.2.3.7 1.1 1.5 1.7.9.7 1.6.9 1.9 1 .2.1.3.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.2.1.4.2.4.4 0 .1 0 .5-.2 1z"
    fill="currentColor"
    stroke="none"
  />
),
  camera: (
    <>
      <path d="M4 8h3l1.6-2h6.8L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  sparkles: (
    <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15zM5 14l.7 1.9L7.6 16.6l-1.9.7L5 19.2l-.7-1.9L2.4 16.6l1.9-.7L5 14z" />
  ),
  chart: (
    <>
      <path d="M4 20V10M11 20V4M18 20v-7" />
    </>
  ),
  chat: (
    <path d="M4 5h16v10H8l-4 4V5z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  arrow: <path d="M5 12h13M13 6l7 6-7 6" />,
};

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}