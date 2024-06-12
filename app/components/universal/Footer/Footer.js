export default function Footer({ author, year, last_updated }) {
  return (
    <>
      <hr className="footer-hr" />
      <footer className="footer">
        <p>&copy; Copyright {author}</p>
        <pre>  All rights reserved</pre>
        <pre>  Proudly 🇬🇭</pre>
        <pre>  Last Updated {last_updated}</pre>
      </footer>
    </>
  )
}
