import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fbfbfb] text-[#424242] antialiased">
        {/* We removed Navbar and Footer from here! */}
        {children}
      </body>
    </html>
  );
}