import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const switzer = localFont({
  src: [
    {
      path: "../assets/font/Switzer-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/font/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/font/Switzer-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/font/Switzer-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/font/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GreenRoad Agency | SaaS Marketing",
  description:
    "Discover unparalleled efficiency and innovation with our cutting-edge SaaS products at GreenRoad Agency. Elevate your business operations to new heights as we seamlessly integrate state-of-the-art software solutions designed to streamline processes, boost productivity, and drive growth. Explore a diverse suite of SaaS offerings tailored to meet the unique needs of your industry, all backed by advanced technology and user-friendly interfaces. Stay ahead of the competition with our scalable and customizable solutions, delivering the agility your business demands. Revolutionize the way you work – unlock the full potential of your enterprise with GreenRoad. Unleash the power of SaaS for a future-proof business strategy!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={switzer.className}>
        <Header />
        <main className="min-h-[200vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
