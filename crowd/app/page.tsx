import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Crowd</h1>
          <div className="flex items-center gap-4">
            <a
              href="mailto:crowdapp.io@gmail.com"
              className="text-sm px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-full font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Support
            </a>
            <Link
              href="/privacy"
              className="text-sm text-zinc-600 hover:text-foreground transition-colors dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Privacy Policy
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Welcome to Crowd
          </h2>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect, collaborate, and grow with your community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="px-8 py-4 border border-zinc-300 dark:border-zinc-700 rounded-full font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <footer className="mt-24 text-center">
          <Link
            href="/privacy"
            className="text-sm text-zinc-500 hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
        </footer>
      </main>
    </div>
  );
}
