import { GeistSans } from "geist/font/sans";
import Nav from "@/components/Nav";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Car Rental",
  description: "Experience the quickest and easiest way to rent a vehicle in your area!",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className=" bg-slate-950 text-foreground text-white">
        <main className="min-h-screen flex flex-col items-center">
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout