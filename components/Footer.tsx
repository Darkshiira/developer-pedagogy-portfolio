export default function Footer() {
  return (
    <footer className="border-t border-line bg-sand/60">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © 2026 Hanna Arefi. Built with care.
        </p>

        <a
          href="#home"
          className="font-medium hover:text-teal"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}