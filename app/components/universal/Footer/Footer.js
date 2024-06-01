export default function Footer({ author, year, last_updated }) {
  return (
    <>
      <hr className="bg-neutral-900 dark:bg-neutral-700 bg-opacity-50 p-0.5 border-none rounded-full my-5" />
      <footer className="text-neutral-600 text-sm font-mono">
        <p>&copy; Copyright {author}</p>
        <pre>  All rights reserved</pre>
        <pre>  Proudly 🇬🇭</pre>
        <pre>  Last Updated {last_updated}</pre>
      </footer>
    </>
  )
}
