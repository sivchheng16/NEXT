export default function Layout({
  children,
  model,
}: {
  children: React.ReactNode;
  model: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {model}
      </body>
    </html>
  );
}
