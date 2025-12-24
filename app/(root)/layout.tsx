export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        {/* sidebar */}
        SIDEBAR
        {children}
    </main>
  );
}
