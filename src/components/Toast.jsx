export default function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="pointer-events-none fixed right-4 top-4 z-40 flex flex-col gap-2">
      <div className="pointer-events-auto rounded-lg border border-[#ADD8E6]/60 bg-mcPanel px-4 py-2 text-xs text-[#ADD8E6] shadow-glow">
        {message}
      </div>
    </div>
  );
}
