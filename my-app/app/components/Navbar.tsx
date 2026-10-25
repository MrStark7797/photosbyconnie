import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/galleries", label: "Galleries" },
  { href: "/about", label: "About" },
  { href: "/inquire", label: "Inquire" },
  { href: "/socials", label: "Socials" },
];


export default function Navbar() {
  return (
    <header className="border-b border-neutral-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-foreground font-semibold tracking-wide">
          Photos by Connie
        </Link>

        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

