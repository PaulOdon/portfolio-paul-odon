import React from "react";

export default function TechnoItem({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full px-3 py-1.5 text-xs font-medium text-primary hover:from-primary/20 hover:to-accent/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-default">
      {text ?? "Text"}
    </span>
  );
}
