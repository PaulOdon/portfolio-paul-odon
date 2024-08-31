import React from "react";

export default function TechnoItem({ text }: { text: string }) {
  return (
    <span className="bg-primary bg-opacity-10 rounded-full p-2 w-fit h-fit text-primary">
      {text ?? "Text"}
    </span>
  );
}
