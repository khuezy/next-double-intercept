import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <li>
          <Link href="/feed/nested">/feed/nested</Link>
        </li>
        <li>
          <Link href="/photo">/photo</Link>
        </li>
      </ul>
    </main>
  )
}
