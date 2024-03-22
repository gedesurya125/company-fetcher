import localFont from "next/font/local";
import "./globals.css";

const loraLocal = localFont({
  src: [
    {
      path: "../components/theme/fonts/lora/Lora-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../components/theme/fonts/lora/Lora-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-lora-local",
});

const interLocal = localFont({
  src: [
    {
      path: "../components/theme/fonts/inter/Inter-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../components/theme/fonts/inter/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../components/theme/fonts/inter/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../components/theme/fonts/inter/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-local-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${loraLocal.variable} ${interLocal.variable}`}>
      <body className="bg-background">
        {/* <Banner />   */}
        {children}
      </body>
    </html>
  );
}
