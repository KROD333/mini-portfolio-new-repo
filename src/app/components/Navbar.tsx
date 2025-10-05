'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="nav">
      <h1 className="brand">
        <Link href="/" className="flex items-center gap-2">
           <img src="/KR.png" alt="Logo" width={60} height={33} />
        </Link>
      </h1>
      <ul className="links" data-current={pathname}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/projects">Projects</Link></li>
      <li><Link href="/skills">Skills</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
    </nav>
  );
}



