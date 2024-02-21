import Link from 'next/link'

export default function Sobre() {
  return (  
    <>
      <h1>Pagina sobre</h1>
      <li>
        <Link href="/"  prefetch={false}>
          Home
        </Link>
      </li>
     
      <li>
        <Link href="/link-prefetch">
          Link Prefetch
        </Link>
      </li> 
    </>
  )
}
