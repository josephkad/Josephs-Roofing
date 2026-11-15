import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Plus_Jakarta_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toast";

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: "Josephs Roofing",
  description: "Roofing Business",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${font.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster>
          {children}
        </Toaster>
        </body>
    </html>
  );
}
