import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Toaster } from "@/components/ui/sonner"
import "./globals.css";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";
import { ConvexClientProvider } from "@/components/convex-client-provider";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoteSphere",
  description: "Collaborate, create, and organize ideas seamlessly in one unified platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <NuqsAdapter>
          <ConvexClientProvider>
            <Toaster />
          {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
