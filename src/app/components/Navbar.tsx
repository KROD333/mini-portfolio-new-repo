'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="border-b">
      <div className="container flex items-center justify-between py-4">
        <h1 className="brand">
          <Link href="/" className="flex items-center gap-3">
            <img src="/KR.png" alt="Logo" width={48} height={48} style={{ borderRadius: "8px" }} />
            <span className="text-lg font-semibold tracking-tight">Kevin Rodriguez</span>
          </Link>
        </h1>
        <ul className="flex gap-4 list-none" data-current={pathname}>
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/skills", label: "Skills" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${
                  isActive(item.href)
                    ? "font-semibold underline underline-offset-4"
                    : "opacity-80 hover:opacity-100"
                } transition-colors`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}



