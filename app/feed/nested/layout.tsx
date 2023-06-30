import Link from "next/link"
export default function Layout({ children, modal }: any) {
  return <div>
    {children}
    {modal}
    <Link href="/photo">Go to /photo</Link>
  </div>
}