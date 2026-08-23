import Link from "next/link";
export default function Navbar(){
    return(
        <nav className="bg-orange-500 flex justify-between items-center p-4 fixed top-0 left-0 w-full z-50 transition-transform duration-300">
            <Link className="font-black" href="/">DevHum</Link>
            <div className="flex justify-evenly gap-4 px-4">
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/developers">Discover</Link>
                <Link href="/connections">Connection</Link>
                <Link href="/profile">Profile</Link>
            </div>


        </nav>
    )
}