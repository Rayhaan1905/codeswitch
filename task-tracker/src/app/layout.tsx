// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'CodeSwitch',
  description: 'Convert code to any language with one click!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <header className="header">
            <h1>💡 CodeSwitch</h1>
            <p>Seamlessly convert code from one language to another</p>
          </header>
          <main className="main">{children}</main>
          <footer className="footer">
            <p>© 2025 CodeSwitch by Rayhaan</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
