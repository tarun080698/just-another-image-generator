import type { Metadata } from "next";
import "@/styles/global.css";
import Header from "@/components/Header";
import PromptInput from "@/components/PromptInput";

export const metadata: Metadata = {
  title: "Just Another Image Generator",
  description:
    "This is a user-friendly web app for creating and customizing images. Ideal for social media, marketing, and personal projects, it offers templates, text options, filters, and more to generate unique images easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* header */}
        <Header />

        {/* prompt input component */}
        <PromptInput />
        {children}
      </body>
    </html>
  );
}
