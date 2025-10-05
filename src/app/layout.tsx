import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My Mini Portfolio",
  description: "My Student portfolio website, built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <footer className="container footer">
          <p>© {new Date().getFullYear()} Kevin Rodriguez</p>
          <p>
            <a href="https://www.linkedin.com/in/kevin-rodriguez-384363330/" >LinkedIn</a> 
            <a href="https://github.com/KROD333" >GitHub</a>
          </p>
        </footer>
      </body>
    </html>
  );
}

