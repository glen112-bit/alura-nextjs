import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Pagina Home</h1>
      <li>
        <Link href="/sobre" prefetch={false}>
          Sobre
        </Link>
      </li>
      <li>
        <Link href="/link-prefetch">
          Link Prefetch
        </Link>
      </li>
    </div>
  )
}
