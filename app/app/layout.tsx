import "./globals.css";

export const metadata = {
  title: "Best Price Sildenafil Thailand",
  description: "ED medication information and price comparison in Thailand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
