"use client";

interface ScrollToNextProps {
  targetId: string;
}

export default function ScrollToNext({ targetId }: ScrollToNextProps) {
  return (
    <button
      onClick={() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      aria-label="Aller à la section suivante"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-900/60 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 focus:outline-none cursor-pointer group"
    >
      <svg
        className="w-5 h-5 text-gray-400 group-hover:text-primary animate-bounce transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
}
