//react component
import Link from "next/link";

export default function NavBar(): React.ReactNode {
  return (
    <div className="border-b-2 flex text-xl">
      <span className="p-2 text-2xl">NavBar</span>
      <Link href="/" className="p-2 transition duration-300 hover:bg-blue-600 ">
        Home
      </Link>
      <Link
        href="/protected"
        className="p-2 transition duration-300 hover:bg-blue-600 "
      >
        Prot I
      </Link>
      <Link
        href="/protectionwithoutmiddleware"
        className="p-2 transition duration-300 hover:bg-blue-600 "
      >
        Prot II
      </Link>
      <Link
        href="/info"
        className="p-2 transition duration-300 hover:bg-blue-600 "
      >
       Information Page 
      </Link>
      <Link
        href="/api/auth/signin"
        className="p-2 transition duration-300 hover:bg-blue-600 "
      >
        Login
      </Link>
      <Link
        href="/api/auth/logout"
        className="p-2 transition duration-300 hover:bg-blue-600 "
      >
        LogOut
      </Link>
    </div>
  );
}
