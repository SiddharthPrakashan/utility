interface HelloWorldProps {
  title: string;
  description?: string;
}

/** Placeholder content until each page is built out. */
export function HelloWorld({ title, description }: HelloWorldProps) {
  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <p className="text-lg text-muted-foreground">Hello, world!</p>
      {description && <p className="text-muted-foreground">{description}</p>}
    </section>
  );
}
