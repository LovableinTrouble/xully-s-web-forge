export const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} xullys. all rights reserved.
        </p>
        <div className="flex gap-4 text-xs">
          <a href="https://x-network.lol" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            X-Network
          </a>
          <a href="https://greasyfork.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            Greasyfork
          </a>
        </div>
      </div>
    </footer>
  );
};
