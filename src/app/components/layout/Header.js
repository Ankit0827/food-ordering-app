import Link from "next/link";

export default function Header() {
  return (
    <header className="header-section flex items-center justify-between p-5 py-8 border-2 shadow-lg">
      <nav className="nav-div flex gap-8 items-center justify-center  font-semibold text-gray-500">
      <Link href={'/'} className="logo-links text-primary font-semibold text-2xl">Bharat Food</Link>
        <Link href={'/'} className="hover:text-primary">Home</Link>
        <Link href={'/menu'} className="hover:text-primary">Menu</Link>
        <Link href={'/about'} className="hover:text-primary">About</Link>
        <Link href={'/conatct'} className="hover:text-primary">Contact</Link>
      </nav>
      <nav className="flex items-center justify-center gap-8">
      <Link href={'/login'} className="font-semibold bg-primary text-white p-2 px-6 rounded-full">Login</Link>
      <Link href={'/register'} className="font-semibold bg-primary text-white p-2 px-6 rounded-full">Register</Link>
      </nav>
    </header>
    
  )
}