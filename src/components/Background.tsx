export function Background() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,.35),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(236,72,153,.25),transparent_60%),radial-gradient(circle_at_50%_100%,rgba(34,211,238,.20),transparent_60%)]" />
      </div>
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.25)_1px,transparent_0)] [background-size:24px_24px]" />
    </div>
  );
}
