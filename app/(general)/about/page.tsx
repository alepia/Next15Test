import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "About Me",
  keywords: ["Alejandro Picquadio", "about"],
};

export default function AboutPage() {
  return (
      <span className="text-7xl">About Page</span>
  );
}
