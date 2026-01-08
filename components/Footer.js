"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-surface">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-text-secondary text-sm">
          <p>© {currentYear} Kian Gray</p>
          <a
            href="https://github.com/Kian452"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
