import React from "react";

export default function TechnoItem({ text }: { text: string }) {
  return (
    <span className="bg-primary bg-opacity-10 rounded-full px-2 py-1 w-fit h-fit text-primary">
      {text ?? "Text"}
    </span>
  );
}
