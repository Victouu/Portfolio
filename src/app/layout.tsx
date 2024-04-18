import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Provider } from "./providers";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { SparklesCore } from "./components/Sparkles";


const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Roué",
  description: "portfolio de Victor Roué",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning >
      <body className={`${space_Grotesk.className}  bg-slate-50 dark:bg-[#0d1117]`}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitch />
          <main>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
