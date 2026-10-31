import { footerNav, siteConfig } from "@config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {year}{" "}
          <a
            href={siteConfig.authorUrl}
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            {siteConfig.author}
          </a>
          . MIT licensed. Files never leave your browser.
        </p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {footerNav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
