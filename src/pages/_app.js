import "@/styles/globals.css";
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <>
    <header>
      <nav>
        <Link href="('/')">home</Link>
        <Link href="('/blog')">blog</Link>
      </nav>
    </header>
    <Component {...pageProps} />
    </>
 )
}
