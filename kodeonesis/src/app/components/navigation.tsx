import Link from 'next/link';

export function Navigation () {
return (
  <nav>
    <ul>
      <li><Link href="/">Accueil</Link></li>
      <li><Link href="/developpeuse">À Propos</Link></li>
    </ul>
  </nav>
)}