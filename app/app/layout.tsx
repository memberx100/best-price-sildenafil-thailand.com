import "./globals.css";

export const metadata = {
  title: "Thailand ED Medication Guide",
  description:
    "Guide articles about sildenafil, Viagra, Cialis, Sidegra and pharmacy questions in Thailand.",
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
