import BodyScrollLock from "@/app/components/body-scroll-lock";

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-50 flex min-h-dvh flex-col bg-[var(--background)] lg:fixed lg:inset-0 lg:overflow-hidden">
      <BodyScrollLock />
      {children}
    </div>
  );
}
