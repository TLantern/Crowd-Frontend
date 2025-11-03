import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground">
            Crowd
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Last updated: {new Date().toISOString().split('T')[0]}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Collection</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
              The developer does not collect any data from this app.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
              Data is not collected from this app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Privacy Commitment</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
              At Crowd, we respect your privacy. Since we do not collect any data, there is no personal information 
              to store, share, or secure. Your privacy is protected by design.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="text-foreground hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}

