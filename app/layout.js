import Nav from './components/Nav';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav /> {/* Logo and Navigation stay locked to the top */}
        {children}
      </body>
    </html>
  );
}