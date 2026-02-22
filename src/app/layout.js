import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { QueryProvider } from "@/providers/QueryProvider";
import { AppProvider } from "@/providers/AppProvider";
import { I18nProvider } from "@/providers/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = localFont({
  src: [
    { path: "../../fonts/JetBrainsMono-VariableFont_wght.ttf", style: "normal" },
    { path: "../../fonts/JetBrainsMono-Italic-VariableFont_wght.ttf", style: "italic" },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "AI Context — Generate AI Rules for Your Stack",
  description:
    "Generate tailored .cursorrules, CLAUDE.md, and copilot-instructions for your language, framework, IDE, and AI model. Open source.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased`}>
        <AppProvider>
          <I18nProvider>
            <QueryProvider>{children}</QueryProvider>
          </I18nProvider>
        </AppProvider>
      </body>
    </html>
  );
}
