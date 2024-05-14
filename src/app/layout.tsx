import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Provider } from "./providers";
//vercel
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Roué",
  description: "Bienvenue sur mon premier portfolio !",
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${space_Grotesk.className}  bg-slate-50 dark:bg-[#0d1117]`}
      >
        <Provider attribute="class" defaultTheme="light">
          <main>
            {children}
            <SpeedInsights />
            <Analytics />
          </main>
        </Provider>
      </body>
    </html>
  );
}
