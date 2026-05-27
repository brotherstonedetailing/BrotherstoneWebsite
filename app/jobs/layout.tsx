import BodyScrollLock from "@/app/components/body-scroll-lock";

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-[var(--background)]">
      <BodyScrollLock />
      {children}
    </div>
  );
}
